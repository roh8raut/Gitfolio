import React from "react";
import "./switch.css";
// import useToggle from '../customHooks/useToggle';

const Switch = ({ on, toggle, children }) => {
  const defaultSwitch = () => (
    <div className={`toggleWrapper switch`}>
      <input
        type="checkbox"
        className="dn"
        id="dn"
        checked={on}
        onChange={toggle}
      />
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
  );

  return <>{children ? children : defaultSwitch()}</>;
};

export default Switch;
