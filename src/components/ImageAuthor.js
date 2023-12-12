import React from "react";
import { LuCamera } from "react-icons/lu";
import "./ImageAuthor.css";

function ImageAuthor({ name, iconColor }) {
  return (
    <div>
      <div className="author-details">
        <LuCamera className="photo-icon" style={{ color: iconColor }} />
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default ImageAuthor;
