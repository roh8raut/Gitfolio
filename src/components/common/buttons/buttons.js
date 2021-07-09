import React from "react";
import "./buttons.css";

const Button = ({ text, classes, handler, icon }) => (
  <button className={`btn__generic ${classes}`} onClick={handler}>
    <span>{text}</span>
    <span className="btn-icon">
      {icon && <img src={icon} alt="plane icon" />}
    </span>
  </button>
);

export default Button;
