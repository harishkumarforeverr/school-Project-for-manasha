import React from "react";
import { ImageAssest } from "../../Assets";
import "./AddVisibility.scss";

const AddVisibility = () => {
  return (
    <div className="AddVisibility">
      <div className="AddVisibility_title">
        <img className="ellipse" src={ImageAssest.VisibileEllipse} alt="ok" />
        <h1>Add visibility to your work</h1>
        <img className="halfEllipse" src={ImageAssest.HalfEllipse} alt="ok" />
      </div>
      <div className="categroies">
        <div className="categroies_container">
          <div className="content">
            <img src={ImageAssest.visible1} alt="ok" />
          </div>
          <h2>Work & Forecasting</h2>
        </div>
        <div className="categroies_container">
          <div className="content">
            <img src={ImageAssest.visible2} alt="ok" />
          </div>
          <h2>Collaboration Pods</h2>
        </div>
        <div className="categroies_container">
          <div className="content">
            <img src={ImageAssest.visible3} alt="ok" />
          </div>
          <h2>Strategic Workflows</h2>
        </div>
      </div>
    </div>
  );
};
export default AddVisibility;
