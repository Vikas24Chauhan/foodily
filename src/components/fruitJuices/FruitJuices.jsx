import React from "react";
import "./FruitJuices.css";
import Divider from "../../assets/images/home/divider_img.png";
import Juices from "../../assets/images/home/juices.png";

function FruitJuices() {
  return (
    <div className="juices-container">
      <div className="juices-image">
        <img src={Juices} alt="" />
      </div>
      <div className="juices-content">
        <h5>Drink for Health</h5>
        <h1>
          Fresh Fruit <span>Juices</span>
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
    </div>
  );
}

export default FruitJuices;
