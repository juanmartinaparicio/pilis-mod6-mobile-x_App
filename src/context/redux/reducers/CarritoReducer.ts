import { createSlice } from '@reduxjs/toolkit';

import { Product } from '@/services/products/types';

export interface ProductCart extends Product {
  quantity: number;
}

type CounterState = {
  cart: ProductCart[];
};

const initialState: CounterState = {
  cart: [],
};

export const carritoSlice = createSlice({
  name: 'carrito',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeFromCart;
    },
    incrementQty: (state, action) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );

      if (itemPresent === undefined) return;
      itemPresent.quantity++;
    },
    decrementQty: (state, action) => {
      const itemPresent = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent === undefined) return;

      if (itemPresent.quantity === 1) {
        const removeFromCart = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeFromCart;
      } else {
        itemPresent.quantity--;
      }
    },
    cleanCart: state => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  cleanCart,
} = carritoSlice.actions;

export default carritoSlice.reducer;
