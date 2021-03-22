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
  const checkIcon = require("../../assets/img/check.svg");

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
      <div
        className={
          "card " +
          (robot.stock > 0 ? "" : "out-stocked") +
          (_.find(subscribedRobots, robot) ? "added-to-cart" : "")
        }
      >
        <figure className="pt-3">
          <img src={robot.image} alt={"image-" + robot.name.toLowerCase()} />
          <b className="material">{robot.material}</b>
          {_.find(subscribedRobots, robot) ? (
            <span className="addedStatus">
              <img
                src={checkIcon.default}
                height="30"
                width="30"
                alt="added-to-cart"
              />
            </span>
          ) : null}

          {/* card actions */}
          <div className="card-actions">
            <button
              className={
                "btn " +
                (robot.stock > 0 ? "available" : "not-available") +
                (_.find(subscribedRobots, robot) ? " added" : "")
              }
              onClick={() =>
                _.find(subscribedRobots, robot)
                  ? unSubscribeCart(robot.name)
                  : subscribeCart(robot.name)
              }
            >
              {robot.stock > 0
                ? _.find(subscribedRobots, robot)
                  ? "Remove from cart"
                  : "Add to cart"
                : "Out of Stock"}
            </button>
          </div>
          {/* card actions */}
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
            <p className="date mb-0">
              {moment(robot.createdAt).format("DD-MM-YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
