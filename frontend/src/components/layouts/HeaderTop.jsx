import { fill } from "lodash";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HeaderTop() {
  const subscribedRobots = useSelector((state) => state.cart.cartItems);
  function sidebarAction(e) {
    e.preventDefault();
    const status = document
      .getElementById("root")
      .classList.contains("sidebar-open");
    console.log(status);
    if (status) {
      document.getElementById("root").classList.remove("sidebar-open");
    } else {
      document.getElementById("root").classList.add("sidebar-open");
    }
  }
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center">
              <div className="header-brand">
                <h1>ERobo</h1>
              </div>
              <div className="header-notif">
                <a
                  href="#"
                  className="header-notif-icon"
                  onClick={(e) => sidebarAction(e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    style={{
                      fill: subscribedRobots.length <= 0 ? "none" : "black",
                    }}
                  >
                    <circle
                      cx="8"
                      cy="21"
                      r="2"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <circle
                      cx="20"
                      cy="21"
                      r="2"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M5.67,6H23l-1.68,8.39a2,2,0,0,1-2,1.61H8.75a2,2,0,0,1-2-1.74L5.23,2.74A2,2,0,0,0,3.25,1H1"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
