import React, { useState } from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Skills_data from "../../assets/skills_data";

import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  const [showAll, setshowAll] = useState(false);

  const visibleSkills = showAll ? Skills_data : Skills_data.slice(0, 14);

  return (
    <div id="skills" className="services">
      <div className="title-box">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {visibleSkills.map((item, index) => {
          return (
            <div key={index} className="services-format">
              <img
                src={item.image}
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore" onClick={() => setshowAll(!showAll)}>
        <p >
          {showAll ? "Show Less" : "Show More"}
        </p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Services;
