import React from "react";
import PanelPage from "../PanelPage";
import "./rightDel.css";

const RightDel = () => {
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
                    <th>Type</th>
                    <th>Release Date</th>
                    <th>Movie Profile</th>
                    <th></th>
                  </tr>
                  <tr className="table_role text-white">
                    <td>2131231231233123213</td>
                    <td>Stranger Things 4</td>
                    <td>action</td>
                    <td>8.12.2022</td>
                    <td>
                      <img
                        src="https://th.bing.com/th/id/OIP.U7m8szFsPNjbty8hyWGGCgHaDt?w=290&h=174&c=7&r=0&o=5&pid=1.7"
                        alt=""
                        className="table_img"
                      />
                    </td>
                    <td>
                      <button className="panel_remove_btn">Remove</button>
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

export default RightDel;
