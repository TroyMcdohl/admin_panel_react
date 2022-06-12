import React from "react";
import { Link } from "react-router-dom";
import "./panelPage.css";
import RightAverage from "./rightPage/RightAverage";
import RightCreateUpdate from "./rightPage/RightCreateUpdate";
import RightDel from "./rightPage/RightDel";
import RightGetAll from "./rightPage/RightGetAll";

const PanelPage = () => {
  return (
    <div className="panel_left">
      <div className="panel_items_box">
        <h5 className="panel_items_title">All Management</h5>
        <ul className="panel_items">
          <li className="panel_item">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/chart"
            >
              Charts
            </Link>
          </li>
        </ul>
      </div>
      <div className="panel_items_box">
        <h5 className="panel_items_title">User Management</h5>
        <ul className="panel_items">
          <li className="panel_item">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/getusers"
            >
              Users
            </Link>
          </li>
          <li className="panel_item">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/members"
            >
              Members
            </Link>
          </li>
          <li className="panel_item">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/admin"
            >
              Admin
            </Link>
          </li>
        </ul>
      </div>
      <div className="panel_items_box">
        <h5 className="panel_items_title">Management</h5>
        <ul className="panel_items">
          <li className="panel_item">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/getusers"
            >
              Movies
            </Link>
          </li>
          <li className="panel_item">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/create"
            >
              Create
            </Link>
          </li>
          <li className="panel_item">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/updatelist"
            >
              Update
            </Link>
          </li>
          <li className="panel_item">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/delete"
            >
              Delete
            </Link>
          </li>
        </ul>
      </div>
      <div className="panel_items_box">
        <h5 className="panel_items_title">Others</h5>
        <ul className="panel_items">
          <li className="panel_item">Setting</li>
          <li className="panel_item">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default PanelPage;
