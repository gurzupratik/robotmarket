import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterRobots } from "../../features/robots/RobotsReducer";

export default function Filter() {
  const _ = require("lodash");
  const all_robots = useSelector((state) => state.products.robots);
  const filterOptions = _.unionBy(all_robots, (item) => item.material);
  const dispatch = useDispatch();
  function filter(e) {
    dispatch(filterRobots(e));
  }
  return (
    <div className="d-flex align-items-center">
      <span>Filter :&nbsp;&nbsp;</span>
      <select
        name="filter_robots"
        id="filter-robots"
        onChange={(e) => filter(e.target.value)}
      >
        <option value="">All Robots</option>
        {filterOptions.map((item) => {
          return (
            <option key={item.name} value={item.material}>
              {item.material}
            </option>
          );
        })}
      </select>
    </div>
  );
}
