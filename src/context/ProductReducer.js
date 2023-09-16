import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[],
    },
    reducers:{
        getProducts:(state,action) => {
            state.product.push({...action.payload})
        },
        incrementQuantity:(state,action) => {
            const itemPresent = state.product.find((item) => item.productId === action.payload.productId);
            itemPresent.quantity++;
        },
        decrementQuantity:(state,action) => {
            const itemPresent = state.product.find((item) => item.productId === action.payload.productId);
            if(itemPresent.quantity == 1){
                const removeFromCart = state.product.filter((item) => item.productId !== action.payload.productId);
                state.cart = removeFromCart;
            }else{
                itemPresent.quantity--;
            }
        }
    }
})


export const {getProducts,incrementQuantity,decrementQuantity} = productSlice.actions;
export default productSlice.reducer;