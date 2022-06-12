import React from "react";
import { Link } from "react-router-dom";
import "./responsivePanel.css";

const ResponsivePanel = () => {
  return (
    <div className="panel_container">
      <div className="panel_wrapper">
        <div className="responsive_panel_left">
          <div className="responsive_panel_items_box">
            <h5 className="responsive_panel_items_title">All Management</h5>
            <ul className="responsive_panel_items">
              <li className="responsive_panel_item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/chart"
                >
                  Charts
                </Link>
              </li>
            </ul>
          </div>
          <div className="responsive_panel_items_box">
            <h5 className="responsive_panel_items_title">User Management</h5>
            <ul className="responsive_panel_items">
              <li className="responsive_panel_item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/getusers"
                >
                  Users
                </Link>
              </li>
              <li className="responsive_panel_item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/members"
                >
                  Members
                </Link>
              </li>
              <li className="responsive_panel_item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/admin"
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div className="responsive_panel_items_box">
            <h5 className="responsive_panel_items_title">Management</h5>
            <ul className="responsive_panel_items">
              <li className="responsive_panel_item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/getusers"
                >
                  Movies
                </Link>
              </li>
              <li className="responsive_panel_item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/create"
                >
                  Create
                </Link>
              </li>
              <li className="responsive_panel_item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/updatelist"
                >
                  Update
                </Link>
              </li>
              <li className="responsive_panel_item">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/delete"
                >
                  Delete
                </Link>
              </li>
            </ul>
          </div>
          <div className="responsive_panel_items_box">
            <h5 className="responsive_panel_items_title">Others</h5>
            <ul className="responsive_panel_items">
              <li className="responsive_panel_item">Setting</li>
              <li className="responsive_panel_item">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePanel;
