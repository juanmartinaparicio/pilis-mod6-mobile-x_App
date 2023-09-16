import { createSlice } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
    name:'carrito',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart : (state,action) => {
            const itemPresent = state.cart.find((item) => item.productId === action.payload.productId);
            if(itemPresent){
                itemPresent.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        removeFromCart :(state,action) => {
            const removeFromCart = state.cart.filter((item) => item.productId !== action.payload.productId);
            state.cart = removeFromCart;
        },
        incrementQty: (state,action) => {
            const itemPresent = state.cart.find((item) => item.productId === action.payload.productId);
            itemPresent.quantity++;
        },
        decrementQty : (state,action) => {
            const itemPresent = state.cart.find((item) => item.productId === action.payload.productId);
            if(itemPresent.quantity == 1){
                const removeFromCart = state.cart.filter((item) => item.productId !== action.payload.productId);
                state.cart = removeFromCart;
            }else{
                itemPresent.quantity--;
            }
            }
        
    }
})


export const {addToCart,removeFromCart,incrementQty,decrementQty} = carritoSlice.actions;

export default carritoSlice.reducer;