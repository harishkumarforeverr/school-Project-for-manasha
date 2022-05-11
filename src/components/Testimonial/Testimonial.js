import React from "react";
import { ImageAssest } from "../../Assets";
import "./Testimonial.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
const Testimonial = () => {
  return (
    <div className="Testimonial">
      <h1 className="title">Testimonials</h1>
      <div className="Testimonial_container">
        <img className="ellipse" src={ImageAssest.VisibileEllipse} alt="ok" />

        <div className="">
          <div className="conetent">
            <div>
              <img
                className="testinomalImage"
                src={ImageAssest.testminal}
                alt="ok"
              />
            </div>
            <div className="text">
              <div>
                <h2>
                  Hapto has been an integral part of our work ecosystem, keeping
                  track of things has
                </h2>
                <h1>Alan Thicke, Manager, Polymer </h1>
                <h3>POLYMER</h3>
              </div>
            </div>
          </div>
          <div className="icons">
            <ArrowLeftOutlined  className="leftIcon"/>
            <ArrowRightOutlined />
          </div>
        </div>

        <img className="fullelipse" src={ImageAssest.HalfEllipse} alt="ok" />
      </div>
    </div>
  );
};
export default Testimonial;
