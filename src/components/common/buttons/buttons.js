import React from 'react';
import './buttons.css';

const Button = ({color = "red", text, classes, handler}) => <button className={`btn__generic ${classes}`} style={{backgroundColor: color}} onClick={handler}>{text}</button>

export default Button;
