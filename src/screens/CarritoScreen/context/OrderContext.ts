import { createContext } from 'react';

import { ProductCart } from '@/context/redux/reducers/CarritoReducer';
import { Order } from '@/services/orders/types';

export interface ContextValue {
  orders: Order[];
  isLoading: boolean;
  refreshOrders: () => Promise<void>;
  refreshOrder: (orderId: string) => Promise<void>;
  refreshCode: (orderId: string) => Promise<void>;
  addOrder: (cart: ProductCart[]) => Promise<void>;
}

const DEFAULT_VALUE: ContextValue = {
  orders: [],
  isLoading: false,
  refreshOrders: async () => {},
  refreshOrder: async () => {},
  addOrder: async () => {},
  refreshCode: async () => {},
};

const OrderContext = createContext<ContextValue>(DEFAULT_VALUE);
export default OrderContext;
