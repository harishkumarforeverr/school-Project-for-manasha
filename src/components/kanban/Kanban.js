import { Button } from "antd";
import React from "react";
import { ImageAssest } from "../../Assets/index";
import "./Kanban.scss";

const Kanban = () => {
  return (
    <div className="Kanban">
      {" "}
      <div className=" text">
        <h1>Task Management</h1>
        <h2>
          Teamleap is trained to find and organize tasks in terms of their
          priority. Each task has a workflow that shows the brief, stakeholders,
          and deadlines. If the requirement changes anytime, all the assignments
          get shuffled accordingly. You also have other options like easy
          search, recurring tasks, and multitask toolbar.
        </h2>
        <Button>Know More</Button>
      </div>{" "}
      <div className="image">
        <img src={ImageAssest.Kanban} alt="ok" />
      </div>
    </div>
  );
};
export default Kanban;
