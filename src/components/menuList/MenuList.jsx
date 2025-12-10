import React from "react";
import "./MenuList.css";
import Image1 from "../../assets/images/menu/menu-list-1.png";
import Image2 from "../../assets/images/menu/menu-list-2.png";
import Image3 from "../../assets/images/menu/menu-list.jpg";
import Divider from "../../assets/images/home/divider_img.png";

function MenuList() {
  return (
    <div className="menuList-container">
      <h5>Softly & Crunchy</h5>
      <h1>Menus</h1>
      <img src={Divider} alt="" />
      <div className="menuList-images">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
      </div>
      <div className="menuList-last">
        <img src={Image3} alt="" />
      </div>
    </div>
  );
}

export default MenuList;
