import React from "react";
import AddVisibility from "./components/AddVisibility/AddVisibility";
import Header from "./components/Header/Header";
import "./App.scss";
import TimeManagement from "./components/TimeManagement/TimeManagement";
import TaskManager from "./components/TaskManager/TaskManager";
import Kanban from "./components/kanban/Kanban";
import CreateShare from "./components/CreateShare/CreateShare";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <Header />
      <AddVisibility />
      <TimeManagement />
      <TaskManager />
      <Kanban />
      <CreateShare />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
