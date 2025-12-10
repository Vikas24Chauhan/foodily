import React from "react";
import "./GalleryHeader.css";
import { NavLink } from "react-router-dom";
import BottomPattern2 from "../../assets/images/home/bottom_pattern_2.png";

function GalleryHeader() {
  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h1>Gallery</h1>
        <p>
          <NavLink>Home </NavLink>: Gallery
        </p>
      </div>

      <img className="gallery-image" src={BottomPattern2} alt="" />
    </div>
  );
}

export default GalleryHeader;
