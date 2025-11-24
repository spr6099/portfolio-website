import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? mywork_data : mywork_data.slice(0, 6);

  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {visibleProjects.map((work, index) => (
          <div key={index} className="mywork-card">
            <h2>{work.name}</h2>
            <img
              src={work.img}
              onClick={() => window.open(work.site, "_blank")}
              alt={work.name}
            />
          </div>
        ))}
      </div>

      {mywork_data.length > 6 && (
        <div className="mywork-showmore" onClick={() => setShowAll(!showAll)}>
          <p>{showAll ? "Show Less" : "Show More"}</p>
          <img src={arrow_icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default MyWork;
