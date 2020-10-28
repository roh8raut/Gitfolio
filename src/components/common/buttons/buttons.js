import React from 'react';
import './buttons.css';

const Button = ({ text, classes, handler }) => <button className={`btn__generic ${classes}`} onClick={handler}>{text}</button>

export default Button;
