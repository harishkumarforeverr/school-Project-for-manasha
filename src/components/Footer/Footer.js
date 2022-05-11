import { Button } from "antd";
import React from "react";
import { ImageAssest } from "../../Assets";
import "./Footer.scss";
const data = [
  {
    title: "Learn",
    content: ["Help", "Onboarding", "Blog", "Hierarchy", "Support", "Articles"],
  },
  {
    title: "Product",
    content: ["HTasks", "Goals", "Import", "Hierarchy", "Docs", "Reportingelp"],
  },
  {
    title: "Use Cases",
    content: [
      "Project",
      "Management",
      "Sales",
      "CRM",
      "Startup",
      "Remote",
      "Non",
      "Profit",
      "Design",
      "Non",
    ],
  },
  {
    title: "Features",
    content: [
      "Project",
      "Management",
      "Sales",
      "CRM",
      "Startup",
      "Remote",
      "Work",
      "Marketing",
      "Design",
      "Non",
    ],
  },
  {
    title: "Compare",
    content: [
      "Project",
      "Management",
      "Sales",
      "CRM",
      "Startup",
      "Remote",
      "Work",
      "Marketing",
      "Non",
      "Profit",
      "Design",
      "Non",
      "CRM",
      "Startup",
    ],
  },
  {
    title: "Resources",
    content: ["HTasks", "Goals", "Import", "Hierarchy", "Docs", "Reportingelp"],
  },
  {
    title: "Slikk",
    content: [
      "HTasks",
      "Goals",
      "Import",
      "Hierarchy",
      "Docs",
      "Reportingelp",
      "Hierarchy",
      "Docs",
      "Reportingelp",
    ],
  },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="search">
        <div className="search_logo_title">
          <img src={ImageAssest.footerlogo} alt="ok" />
          <h1>Task Management made simple</h1>
        </div>
        <div className="btn">
          <Button>Book A Demo</Button>
        </div>
      </div>

      <div className="container">
        <div className="container-title">
          <h1>Hapto also works great on smaller screens</h1>
          <div>
            <img src={ImageAssest.playstore} alt="ok" />
            <img src={ImageAssest.applestire} alt="ok" />
          </div>
        </div>
        <div>
          <div className="links_container">
            {data.map((data) => {
              return (
                <div className="links">
                  <h1>{data.title}</h1>
                  <div className="para">
                    {data.content.map((val) => {
                      return <p> {val}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="copywrite">
          <div>
            <h1 className="title">Teamleap</h1>
            <h1>© 2021 all right reserved</h1>
          </div>
          <div>
            <img className="fb" src={ImageAssest.fb} alt="ok" />
            <img src={ImageAssest.instra} alt="ok" />
            <img src={ImageAssest.Lin} alt="ok" />
            <img src={ImageAssest.twitter} alt="ok" />
            <img src={ImageAssest.you} alt="ok" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
