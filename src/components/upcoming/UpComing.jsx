import React from "react";
import "./UpComing.css";
import MainImage from "../../assets/images/home/upcoming_image.jpg";
import SideImage from "../../assets/images/home/upcoming_side_image.png";
import Divider from "../../assets/images/home/divider_img.png";

function UpComing() {
  return (
    <div className="upcoming-container">
      <div className="upcoming-content">
        <h1>
          Upcoming Our
          <span>
            <br />
            Beverage
          </span>
        </h1>
        <img src={Divider} alt="" />
        <p>
          Us percipit urbanitas referrentur ea. Mei at numquam molestiae
          intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro
          ne malis semper perpetua. Nam sint atqui voluptatibus an, pro ne malis
          semper perpetua.
        </p>
        <button>Buy Now</button>
      </div>

      <div className="upcoming-image">
        <img src={SideImage} alt="" />
      </div>
    </div>
  );
}

export default UpComing;
