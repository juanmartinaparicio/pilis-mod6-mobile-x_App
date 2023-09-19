import { configureStore } from '@reduxjs/toolkit';
import CarritoReducer from './CarritoReducer';
import ProductReducer from './ProductReducer';

export default configureStore({
  reducer: {
    cart: CarritoReducer,
    product: ProductReducer,
  },
});
