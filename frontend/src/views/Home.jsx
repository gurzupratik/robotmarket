import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { loadRobots } from "../features/robots/RobotsReducer";
import { useDispatch } from "react-redux";
import RobotsSection from "../components/blocks/RobotsSection";
import CartBlock from "../components/blocks/CartBlock";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8000/api/robots").then(function (response) {
      let robots = response.data.data;
      dispatch(loadRobots(robots));
    });
  });

  return (
    <div className="mainWrapper">
      <div className="page-left">
        <CartBlock></CartBlock>
        <div className="container">
          <RobotsSection></RobotsSection>
        </div>
      </div>
    </div>
  );
}
