import React from "react";
import CartItem from "../unit/Cartitem";
import { useSelector, useDispatch } from "react-redux";
import EmptyCarticon from "../../assets/img/empty_cart.svg";

export default function CartBox() {
  const empty_cart = require("../../assets/img/empty_cart.svg");
  const cartItems = useSelector((state) => state.cart.cartItems);
  if (cartItems.length > 0) {
    return cartItems.map((item) => (
      <CartItem item={item} key={item.name}></CartItem>
    ));
  } else {
    return (
      <div
        className="text-center"
        style={{ fontSize: "1.2rem", color: "grey", marginTop: 50 }}
      >
        <img
          src={empty_cart.default}
          alt="empty-cart-icon"
          className="mx-auto"
          width="140"
        />
        <p>No items in the cart</p>
      </div>
    );
  }
}
