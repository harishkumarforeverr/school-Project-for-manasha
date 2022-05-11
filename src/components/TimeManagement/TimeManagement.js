import { Button } from "antd";
import React from "react";
import { ImageAssest } from "../../Assets/index";
import "./TimeManagement.scss";

const TimeManagement = () => {
  return (
    <div className="TimeManagement">
      <div className=" text">
        <h1>Time Management</h1>
        <h2>
          Find and fix anything that eats time. Lavender continuously learns
          what time works best for you. The dashboard helps you schedule time,
          manage team capacity, organize global calendars, and track milestones
          at work. It also shows the current status of projects and where you
          can make changes to reduce the workload.
        </h2>
        <Button>Know More</Button>
        {/* #5433FF */}
      </div>
      <div className="image">
        <img src={ImageAssest.TimeMangement} alt="ok" />
      </div>
    </div>
  );
};
export default TimeManagement;
