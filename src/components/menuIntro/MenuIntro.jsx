import React from "react";
import "./MenuIntro.css";
import Image1 from "../../assets/images/menu/menu-icon-1.png";
import Image2 from "../../assets/images/menu/menu-icon-2.png";
import Image3 from "../../assets/images/menu/menu-icon-3.png";

function MenuIntro() {
  const menuData = [
    {
      id: 1,
      image: Image1,
      name: "Awesome taste",
      desc: "Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.",
    },
    {
      id: 2,
      image: Image2,
      name: "Organic fruits",
      desc: "Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.",
    },
    {
      id: 3,
      image: Image3,
      name: "Healthy Blends",
      desc: "Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.",
    },
  ];

  return (
    <div className="menuintro-container">
      <div className="menuintro-cards">
        {menuData.map((data) => (
          <div key={data.id} className="menuintro-card">
            <img src={data.image} alt="" />
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuIntro;
