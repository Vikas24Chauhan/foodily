import React from "react";
import "./AboutHeader.css";
import { NavLink } from "react-router-dom";
import BottomPattern2 from "../../assets/images/home/bottom_pattern_2.png";

function AboutHeader() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          <NavLink>Home </NavLink>: About Us
        </p>
      </div>

      <img className="about-image" src={BottomPattern2} alt="" />
    </div>
  );
}

export default AboutHeader;
