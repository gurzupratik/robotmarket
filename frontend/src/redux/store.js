import { configureStore } from "@reduxjs/toolkit";
import allrobots from "../features/robots/RobotsReducer";
import cart_box from "../features/CartReducer";
export default configureStore({
  reducer: {
    products: allrobots,
    cart: cart_box,
  },
});
