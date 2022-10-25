import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const product = { ...payload, cartQuantity: 1 };
        state.cartItems.push(product);
      }
    },
    incrementQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload
      );
      if (state.cartItems[itemIndex].cartQuantity) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
    },
    decrementQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else {
        state.cartItems.pop(itemIndex);
      }
    },
    removeFromCart: (state, { payload }) => {
      const products = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload
      );
      state.cartItems = products;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartTotalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decrementQuantity,
  incrementQuantity,
} = cartReducer.actions;

export default cartReducer.reducer;
