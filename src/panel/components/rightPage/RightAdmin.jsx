import React from "react";
import PanelPage from "../PanelPage";
import "./rightGetAll.css";

const RightGetAll = () => {
  return (
    <div className="panel_container">
      <div className="panel_wrapper">
        <PanelPage />
        <div className="getall_container">
          <div className="getall_wrapper">
            <div className="getall_box">
              <table className="table  text-center ">
                <tbody>
                  <tr class="table_header table-dark">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Profile</th>
                  </tr>
                  <tr className="table_role text-white">
                    <td>2131231231233123213</td>
                    <td>Thar Nyi Kaung Set</td>
                    <td>tharnyikaungset@gmail.com</td>
                    <td>
                      <img
                        src="https://th.bing.com/th/id/OIP.U7m8szFsPNjbty8hyWGGCgHaDt?w=290&h=174&c=7&r=0&o=5&pid=1.7"
                        alt=""
                        className="table_img"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightGetAll;
