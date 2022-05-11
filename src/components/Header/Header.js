import { Button } from "antd";
import React from "react";
// import { ImageAssest } from "../../Assets";
import "./Header.scss";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { ImageAssest } from "../../Assets/index";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-compoenets">
          <img className="logo" src={ImageAssest.logo} alt="ok" />
          <div className="title">
            <h1> Learn</h1>
            <h1> Product</h1>
            <h1> Pricing</h1>
          </div>{" "}
          <div className="title">
            <h1> Book A Demo</h1>
            <h1> sign in</h1>
            <Button className="try"> Try For Free</Button>
          </div>
        </div>
      </div>
      <div className="banner">
        <img className="hero-bg" src={ImageAssest.Group} alt="ok" />

        <div className="hero-section">
          <div className="banner_text">
            <div>
              <h1>
                One platform to communicate, <br />
                collaborate and accelerate
              </h1>
              <h3>
                Slikk helps you get more tasks done in less time. <br />
                It's everything you need to work faster, <br /> collaborate
                better, and improve productivity at <br /> your workplace.
              </h3>
              <div className="percentage_txt">
                <h2 className="percentage">
                  <span>
                    {" "}
                    50% <ArrowDownOutlined />
                  </span>{" "}
                  <span>
                    {" "}
                    45% <ArrowUpOutlined />{" "}
                  </span>{" "}
                  <span> 3X </span>
                </h2>
                <h2 className="txt">
                  {" "}
                  <span>Calls and Meetings</span>
                  <span>Goals Achieved</span> <span>Productivity </span>
                </h2>
              </div>
              <div className="btn">
                <Button type="primary">Start Your Free Trial</Button>
                <Button>Get A Live Demo</Button>
              </div>
            </div>
          </div>
          <div className="banner_img">
            <img src={ImageAssest.HeroSection} alt="ok" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
