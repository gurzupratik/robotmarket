import React, { useState } from "react";
// import { robotSlice } from "../../features/robots/RobotsReducer";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
} from "../../features/CartReducer";

export default function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  function addCount(item) {
    if (item.stock > item.count && item.count < 5) {
      dispatch(incrementCartItem(item));
    } else {
      alert("Max items reached");
    }
  }

  function removeCount(item) {
    if (item.count !== 1) {
      dispatch(decrementCartItem(item));
    } else {
      dispatch(removeFromCart(item));
    }
  }
  return (
    <div className="cart-item d-flex">
      <div className="cart-left">
        <img src={item.image} alt={"image-" + item.name} />
      </div>
      <div className="cart-right">
        <p className="cart-name">{item.name}</p>
        <div className="cart-control">
          <button onClick={() => addCount(item)}>+</button>
          <span className="cart-times">{item.count} x</span>
          <button onClick={() => removeCount(item)}>-</button>
        </div>
      </div>
      <p className="cart-price">฿ {item.price}</p>
    </div>
  );
}
