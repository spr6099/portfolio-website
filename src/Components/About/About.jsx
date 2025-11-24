import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from "../../assets/about_profile.svg";
import profile_img from "../../assets/pro2.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Full-Stack Developer skilled in React, Node.js, Express,
              TypeScript, and Next.js, with a strong focus on building
              responsive, high-performance web applications and intuitive native
              mobile apps. I enjoy creating clean, scalable solutions and
              delivering seamless user experiences across platforms.
            </p>
            <p>
              I take pride in my commitment to quality, innovation, and
              continuous learning—values that drive my work and help me deliver
              meaningful digital experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Frontend</h1>
          <p>React, Next.js, Tailwind, Redux Toolkit</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Backend</h1>
          <p>Node.js, Express, MongoDB, PostgreSQL</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>Mobile</h1>
          <p>React Native, SQLite</p>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
