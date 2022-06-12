import React from "react";
import { Link } from "react-router-dom";
import "./panelNav.css";

const PanelNav = () => {
  return (
    <div className="nav_container">
      <div className="nav_wrapper">
        <div className="nav_left">
          <h4 className="nav_left_title">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/panel"
            >
              AdminDashBoad
            </Link>
          </h4>
        </div>
        <div className="nav_right">
          <ul className="nav_right_items">
            <li className="nav_right_item">Open The Main Site</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PanelNav;
