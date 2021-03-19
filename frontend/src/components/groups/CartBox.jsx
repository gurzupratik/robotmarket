import React from "react";
import CartItem from "../unit/Cartitem";
import { useSelector, useDispatch } from "react-redux";

export default function CartBox() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  if (cartItems.length > 0) {
    return cartItems.map((item) => (
      <CartItem item={item} key={item.name}></CartItem>
    ));
  } else {
    return (
      <p className="text-center" style={{ fontSize: "1.2rem", color: "grey" }}>
        No items in the cart
      </p>
    );
  }
}
