import React from "react";
import "./Header.css";
import HeroImage1 from "../../assets/images/home/header_img_1.png";
import HeroImage2 from "../../assets/images/home/header_img_2.png";
import HeroImage3 from "../../assets/images/home/header_img_3.png";
import BottomLeft1 from "../../assets/images/home/bottom_left_1.png";
import BottomLeft2 from "../../assets/images/home/bottom_left_2.png";
import BottomLeft3 from "../../assets/images/home/bottom_left_3.png";
import BottomPattern2 from "../../assets/images/home/bottom_pattern_2.png";

function Header() {
  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-contant">
          <div className="header-text">
            <h1>
              Heathly
              <br />
              Smoothie
            </h1>
            <p>
              Consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
            <button>Buy Now</button>
          </div>
          <div className="header-image">
            <img src={HeroImage1} alt="" />
          </div>
        </div>
      </div>
      <img className="header-bottom-image" src={BottomPattern2} alt="" />
    </section>
  );
}

export default Header;
