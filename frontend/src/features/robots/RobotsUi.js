import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function robots_ui() {
  const count = useSelector((state) => state.counter.robots);
  const dispatch = useDispatch();

  return <div></div>;
}
