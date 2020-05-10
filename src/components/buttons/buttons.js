import React from 'react';
import './buttons.css';

const Button = ({color = "red", text, classes}) => <button className={`btn__generic ${classes}`} style={{backgroundColor: color}}>{text}</button>

export default Button;
