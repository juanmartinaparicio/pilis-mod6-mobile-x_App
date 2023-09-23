import { ACTIONS, Action } from './actions';
import { State } from './state';

function reducer(state: State, action: Action): State {
  const actionType = action.type;

  switch (actionType) {
    case ACTIONS.LOADING:
      return { ...state, isLoading: true };

    case ACTIONS.LOAD_ORDERS: {
      const { orders } = action;
      return { orders, isLoading: false };
    }

    case ACTIONS.UPDATE_ORDER: {
      const { order } = action;
      const orders = state.orders.filter(o => o.id !== order.id);
      orders.push(order);
      return { orders, isLoading: false };
    }

    default:
      return state;
  }
}

export default reducer;
