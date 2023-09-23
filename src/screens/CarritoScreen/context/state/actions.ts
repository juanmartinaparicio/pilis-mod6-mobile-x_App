import { Order } from '@/services/orders/types';

export enum ACTIONS {
  LOADING,
  LOAD_ORDERS,
  UPDATE_ORDER,
}

export interface LoadingAction {
  type: ACTIONS.LOADING;
}

export interface LoadOrdersAction {
  type: ACTIONS.LOAD_ORDERS;
  orders: Order[];
}

export interface UpdateOrderAction {
  type: ACTIONS.UPDATE_ORDER;
  order: Order;
}

export type Action = LoadingAction | LoadOrdersAction | UpdateOrderAction;
