import React from "react";
import CartBox from "../groups/CartBox";
import { useSelector, useDispatch } from "react-redux";

export default function CartBlock() {
  const subscribedRobots = useSelector((state) => state.cart.cartItems);
  const totalRobots =
    subscribedRobots.length > 0
      ? subscribedRobots.reduce((sum, item) => {
          return parseInt(sum) + parseInt(item.count);
        }, 0)
      : 0;

  const totalPrice =
    subscribedRobots.length > 0
      ? subscribedRobots.reduce((sum, item) => {
          return (
            parseFloat(sum) + parseFloat(item.count) * parseFloat(item.price)
          );
        }, 0)
      : 0;

  return (
    <div className="page-right">
      <div className="cart-header">
        <p className="cart-header-title">Shopping Bag</p>
        {totalRobots > 0 ? <p>( {totalRobots} &nbsp;items )</p> : ""}
      </div>
      <CartBox></CartBox>
      {totalRobots > 0 ? (
        <p className="final">
          <b className="mr-3">Sub total:</b>{" "}
          <span>
            <b>฿</b>
            {totalPrice.toFixed(2)}
          </span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
