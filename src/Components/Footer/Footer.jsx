import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import sprLogo from "../../assets/sprTransLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top ">
        <div className="footer-top-left ">
          <img src={sprLogo} alt="" height="50px" />
        </div>
        <div className="footer-top-right">
          <p>
            I am a dedicated{" "}
            <span style={{ color: "#c1121f" }}>Full-Stack Developer</span>
            <span style={{ color: "#0096c7" }}> from </span>
            <span style={{ color: "#c1121f" }}>Kerala</span> , specializing in
            building modern, scalable, and responsive web applications using the 
             <span style={{ color: "#c1121f" }}> MERN </span> stack. I bring hands-on experience, attention to detail, and a
            passion    <span style={{ color: "#0096c7" }}> for </span> creating clean, efficient digital solutions.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Sandeep PR. Crafted with passion and purpose.
        </p>
        <div className="footer-bottom-right">
          <p>About</p>
          <p>Support</p>
          <p>Get in Touch</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
