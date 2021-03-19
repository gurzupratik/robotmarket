import { createSlice } from "@reduxjs/toolkit";

var _ = require("lodash");
export const cartSlice = createSlice({
  name: "cart_box",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems.length < 5) {
        if (_.find(state.cartItems, action.payload)) {
        } else {
          state.cartItems = [
            ...state.cartItems,
            { ...action.payload, count: 1 },
          ];
        }
      } else {
        alert("Max only 5 differrent robots can be added.");
      }
    },
    removeFromCart: (state, action) => {
      const cartArrayUpdated = state.cartItems.filter(
        (item) => item.name !== action.payload.name
      );
      state.cartItems = cartArrayUpdated;
    },
    incrementCartItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.name === action.payload.name) {
          item.count++;
        }
      });
    },
    decrementCartItem: (state, action) => {
      state.cartItems.forEach((item) => {
        if (item.name === action.payload.name) {
          item.count--;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
