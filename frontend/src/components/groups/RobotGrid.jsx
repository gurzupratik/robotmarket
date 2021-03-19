import React from "react";
import Robot from "../unit/Robot";
import { useSelector } from "react-redux";
import Filter from "../unit/Filter";
import { filter } from "lodash";

export default function RobotGrid() {
  // function addToCart(robot) {
  //   console.log("add cart event");
  // }
  const all_robots = useSelector((state) => state.products.robots);
  const filterOption = useSelector((state) => state.products.filterby);
  const filteredRoots =
    filterOption === ""
      ? all_robots
      : all_robots.filter(function (item) {
          return item.material === filterOption;
        });

  return (
    <div className="row">
      <div className="col-12">
        <div className="filter-header">
          <b>Items for you</b>
          <Filter></Filter>
        </div>
      </div>

      {!all_robots
        ? "Loading..."
        : filteredRoots.map((item) => <Robot robot={item} key={item.name} />)}
      {/* {all_robots.map((item) => (
        <Robot robot={item}></Robot>
      ))} */}
    </div>
  );
}
