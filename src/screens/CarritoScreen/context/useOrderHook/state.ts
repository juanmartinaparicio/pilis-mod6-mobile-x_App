import { Order } from '@/services/orders/types';

export interface State {
  orders: Order[];
  isLoading: boolean;
}

export const initialState: State = {
  orders: [],
  isLoading: false,
};
