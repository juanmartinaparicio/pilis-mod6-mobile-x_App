import { configureStore } from '@reduxjs/toolkit';

import CarritoReducer from './reducers/CarritoReducer';
import ProductReducer from './reducers/ProductReducer';

export default configureStore({
  reducer: {
    cart: CarritoReducer,
    product: ProductReducer,
  },
});
