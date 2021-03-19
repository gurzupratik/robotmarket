import React from "react";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as moment from "moment";

import { addToCart, removeFromCart } from "../../features/CartReducer";
var _ = require("lodash");

export default function Robot(props) {
  const dispatch = useDispatch();
  const { id, robot } = props;
  const all_robots = useSelector((state) => state.products.robots);
  const subscribedRobots = useSelector((state) => state.cart.cartItems);

  function subscribeCart(item) {
    if (robot.stock !== 0) {
      let cartItem = _.find(all_robots, { name: item });
      // let setSub
      // check to see if item is in cart already
      if (_.find(subscribedRobots, { name: item })) {
      } else {
        // console.log(cartItem);
        dispatch(addToCart(cartItem));
      }
    }
  }
  function unSubscribeCart(item) {
    if (robot.stock !== 0) {
      let cartItem = _.find(all_robots, { name: item });

      dispatch(removeFromCart(cartItem));
    }
  }
  useEffect(() => {
    // addedStatus;
  });
  return (
    <div className="col-md-6 col-lg-4 col-xxl-3 mb-3" id={id}>
      <div className={"card " + (robot.stock > 0 ? "" : "out-stocked")}>
        <figure className="pt-3">
          <img src={robot.image} alt={"image-" + robot.name.toLowerCase()} />
          <b className="material">{robot.material}</b>
        </figure>
        <p className="py-2 mb-0 card-mid d-flex justify-content-between px-3">
          <b className="price">
            <b className="mx-2">฿</b>
            {robot.price}
          </b>
          <b className="stock">
            <b className="mx-2">Stock:</b>
            {robot.stock}
          </b>
        </p>
        <div className="card-body">
          <div>
            <p className="card-title">{robot.name}</p>
            <p className="date">
              {moment(robot.createdAt).format("DD-MM-YYYY")}
            </p>
          </div>
          <button
            className={
              "btn " +
              (robot.stock > 0 ? "btn-info" : "btn-warning") +
              (_.find(subscribedRobots, robot) ? " btn-primary" : "")
            }
            onClick={() =>
              _.find(subscribedRobots, robot)
                ? unSubscribeCart(robot.name)
                : subscribeCart(robot.name)
            }
          >
            {robot.stock > 0
              ? _.find(subscribedRobots, robot)
                ? "Remove"
                : "Add"
              : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
