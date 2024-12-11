import { createSlice } from '@reduxjs/toolkit'
import  Swal  from 'sweetalert2';

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // checks if item exists 
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            // if not exists, then adds it
            if(!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added to Cart",
                    showConfirmButton: false,
                    timer: 1500
                  });
            } else {
                Swal.fire({
                    title: "Product already added to Cart",
                    icon: "warning",
                    confirmButtonColor: "#3085d6",
                  })
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

// export action 
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export reducer
export default cartSlice.reducer;