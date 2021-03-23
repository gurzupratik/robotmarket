import { configureStore } from "@reduxjs/toolkit";
import allrobots from "../features/robots/RobotsReducer";
import cart_box from "../features/CartReducer";

import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products: allrobots,
  cart: cart_box,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
// export default configureStore({
//   reducer: {
//     products: allrobots,
//     cart: cart_box,
//   },
// });
