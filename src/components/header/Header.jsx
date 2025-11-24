import React from "react";
import "./Header.css";
import HeroImage from "../../assets/images/header_img_1.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header-contant">
        <div className="header-text">
          <h1>
            Heathly
            <br />
            Smoothie
          </h1>
          <p>
            Consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
        <div className="header-image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
