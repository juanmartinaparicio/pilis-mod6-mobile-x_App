import { configureStore } from '@reduxjs/toolkit';

import CarritoReducer from './reducers/CarritoReducer';
import ProductReducer from './reducers/ProductReducer';

const store = configureStore({
  reducer: {
    cart: CarritoReducer,
    product: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
