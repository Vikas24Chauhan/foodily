import React from "react";
import "./MenuVideo.css";
import { PlayIcon } from "lucide-react";

function MenuVideo() {
  return (
    <div className="menuVideo-container">
      <div className="menuVideo-play-btn">
        <PlayIcon className="menuVideo-icon" />
      </div>
    </div>
  );
}

export default MenuVideo;
