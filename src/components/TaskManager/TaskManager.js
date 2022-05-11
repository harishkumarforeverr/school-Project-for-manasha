import { Button } from "antd";
import React from "react";
import { ImageAssest } from "../../Assets/index";
import "./TaskManager.scss";

const TaskManager = () => {
  return (
    <div className="TaskManager">
      {" "}
      <div className="image">
        <img src={ImageAssest.TaskManger} alt="ok" />
      </div>
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
      </div>
    </div>
  );
};
export default TaskManager;
