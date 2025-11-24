import React from "react";
import "./Hero.css";
// import profile_img from '../../assets/profile_img.svg'
import profile_img from "../../assets/pro6.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src={profile_img}
        alt=""
        className="profile-img"
        height="250px"
        width="150px"
      />
      <h1>
        <span>I'm Sandeep PR,</span> React Fullstack developer based in Kerala
      </h1>
      <p>
        I am a passionate Full-Stack Developer from Kerala with hands-on
        experience building modern web applications using the MERN stack.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a
          href="/resume.pdf"
          download="Sandeep_PR_Resume.pdf"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
