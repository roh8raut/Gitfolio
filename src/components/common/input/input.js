import React from 'react';
import './input.css';

const Input = ({name, handler, classList}) => {
    return (
        <input type="text" placeholder={name} autoComplete = "off" className={`input-text ${classList}`} name={name} onChange={(e) => handler(e.target)}/>
    ) 
};

export default Input;
