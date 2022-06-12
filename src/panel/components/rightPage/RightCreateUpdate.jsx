import React from "react";
import PanelPage from "../PanelPage";
import "./rightCreateUpdate.css";

const RightCreateUpdate = () => {
  return (
    <div className="panel_container">
      <div className="panel_wrapper">
        <PanelPage />
        <div className="getall_container">
          <div className="getall_wrapper">
            <div className="rightCreateUpdate_container">
              <div className="rightCreateUpdate_wrapper">
                <h4 className="create_game">Create Game</h4>
                <div className="rightCreateUpdate_input_wrapper">
                  <div className="rightCreateUpdate_input_box">
                    <label htmlFor="" className="rightCreateUpdate_label">
                      Name
                    </label>
                    <input type="text" className="rightCreateUpdate_input" />
                  </div>
                  <div className="rightCreateUpdate_input_box">
                    <label htmlFor="" className="rightCreateUpdate_label">
                      Movie Detail
                    </label>
                    <textarea className="rightCreateUpdate_input" />
                  </div>
                </div>

                <div className="rightCreateUpdate_input_wrapper">
                  <div className="rightCreateUpdate_input_box">
                    <label htmlFor="" className="rightCreateUpdate_label">
                      Type
                    </label>
                    <input type="text" className="rightCreateUpdate_input" />
                  </div>

                  <div className="rightCreateUpdate_input_box">
                    <label htmlFor="" className="rightCreateUpdate_label">
                      Casts
                    </label>
                    <input type="text" className="rightCreateUpdate_input" />
                  </div>
                </div>

                <div className="rightCreateUpdate_input_wrapper">
                  <div className="rightCreateUpdate_input_box">
                    <label htmlFor="" className="rightCreateUpdate_label">
                      Director
                    </label>
                    <input type="text" className="rightCreateUpdate_input" />
                  </div>

                  <div className="rightCreateUpdate_input_box">
                    <label htmlFor="" className="rightCreateUpdate_label">
                      Released Date
                    </label>
                    <input type="date" className="rightCreateUpdate_input" />
                  </div>
                </div>

                <div className="rightCreateUpdate_input_wrapper">
                  <div className="rightCreateUpdate_input_box">
                    <label htmlFor="" className="rightCreateUpdate_label">
                      Poster
                    </label>
                    <input type="file" className="rightCreateUpdate_input" />
                  </div>
                </div>

                <button className="rightCreateUpdate_btn">Create Movie</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCreateUpdate;
