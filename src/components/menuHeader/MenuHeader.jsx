import React from "react";
import "./MenuHeader.css";
import { NavLink } from "react-router-dom";
import BottomPattern2 from "../../assets/images/home/bottom_pattern_2.png";

function MenuHeader() {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <h1>Menu</h1>
        <p>
          <NavLink>Home </NavLink>: Menu
        </p>
      </div>

      <img className="menu-image" src={BottomPattern2} alt="" />
    </div>
  );
}

export default MenuHeader;
