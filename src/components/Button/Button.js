import React from "react";
import "./Button.css";

function Button({ children, bgColor, color, onBtnClick, size }) {
  return (
    <button
      onClick={onBtnClick}
      className="download-btn"
      style={{ backgroundColor: bgColor, color: color , width : size}}
    >
      {children}
    </button>
  );
}

export default Button;
