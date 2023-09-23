import { useEffect, useReducer } from 'react';

import { ACTIONS } from './actions';
import reducer from './reducer';
import { initialState } from './state';

import { ProductCart } from '@/context/redux/reducers/CarritoReducer';
import generateOrder from '@/services/orders/generateOrder';
import getOrder from '@/services/orders/getOrder';
import refreshToken from '@/services/orders/refreshToken';
import { Order } from '@/services/orders/types';
import Storage from '@/utils/storage';

const ORDERS_STORAGE = 'orders';
function useOrderHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadingAction = () => dispatch({ type: ACTIONS.LOADING });
  const loadOrderAction = (orders: Order[]) =>
    dispatch({ type: ACTIONS.LOAD_ORDERS, orders });
  const updateOrderAction = (order: Order) =>
    dispatch({ type: ACTIONS.UPDATE_ORDER, order });

  const refreshOrders = async () => {
    loadingAction();
    const storage = new Storage<string[]>(ORDERS_STORAGE);
    let ordersId = await storage.getValue();

    if (!ordersId) return loadOrderAction([]);

    const orders: Order[] = [];
    for (const orderId of ordersId) {
      const response = await getOrder(orderId);
      if (response.isError) continue;
      const order = response.result!;
      if (order.isDelivered || order.isExpired) continue;
      orders.push(order);
    }

    ordersId = orders.map(o => o.id);
    storage.setValue(ordersId);
    loadOrderAction(orders);
  };
  const refreshOrder = async (orderId: string) => {
    loadingAction();
    const response = await getOrder(orderId);
    const storage = new Storage<string[]>(ORDERS_STORAGE);

    if (response.isError) {
      return;
    }
    const order = response.result!;

    if (!order.isDelivered && !order.isExpired) return updateOrderAction(order);
    const orders = state.orders.filter(o => o.id !== order.id);

    storage.setValue(orders.map(o => o.id));
    loadOrderAction(orders);
  };
  const refreshCode = async (orderId: string) => {
    loadingAction();
    const { isError, result: order, status } = await refreshToken(orderId);
    if (isError) console.error(status);

    if (isError || !order || order.isDelivered || order.isExpired)
      return refreshOrder(orderId);
    updateOrderAction(order);
  };
  const addOrder = async (cart: ProductCart[]) => {
    loadingAction();
    const { isError, result: order } = await generateOrder(cart);

    if (isError || !order || order.isDelivered || order.isExpired)
      return refreshOrders();

    const storage = new Storage(ORDERS_STORAGE);
    const orders = [...state.orders, order];
    await storage.setValue(orders.map(o => o.id));
    loadOrderAction(orders);
  };

  useEffect(() => {
    refreshOrders();
  }, []);

  return {
    ...state,
    refreshOrders,
    refreshOrder,
    addOrder,
    refreshCode,
  };
}
export default useOrderHook;
