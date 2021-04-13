import React, { useState } from 'react';
import './navbar.css';
// import menu from '../../assets/menu.svg';
import Hamburger from '../hamburger/hamburger';
import { NavLink } from 'react-router-dom';

import twitterIcon from '../../assets/icons/twitter.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

function Navbar() {
    const isMobile = window.innerWidth <= 500;
    const [showHamburger, setShowHamburger] = useState(false);
    const btnEle = React.useRef()
    const clickHandler = (e) => {
        btnEle.current.classList.toggle("active");
        btnEle.current.classList.toggle("not-active");
        setShowHamburger(!showHamburger);
    }
    return (
        <div style={{ position: "relative" }}>
            <Hamburger clickHandler={clickHandler} btnEle={btnEle} />
            <div className={`navbar__links ${showHamburger ? "isOpen" : ""}`}>
                <span onClick={clickHandler}><NavLink to="/Gitfolio"exact activeClassName="linkActive">Home</NavLink></span>
                <span onClick={clickHandler}><NavLink to="/Gitfolio/repo" activeClassName="linkActive">Portfolio</NavLink></span>
                <span onClick={clickHandler}><NavLink to="/Gitfolio/contact" activeClassName="linkActive">Contact Me</NavLink></span>
                <span><a href="https://drive.google.com/uc?id=1xjtv53ScI7gEOMfUY0JmKg0Pg4-edTmQ&amp;export=download" download="Rohit_Raut_Frontend">Resume</a></span>
                {isMobile && <p className="content__addinfo--social" data-aos="fade-up">
                    <a href="https://twitter.com/wierdorohit123"><img src={twitterIcon} alt="twitter-icon" className="width__2" /></a>
                    <a href="https://in.linkedin.com/in/rautrohit"><img src={linkedinIcon} className="width__2" alt="linkedin icon" /></a>
                </p>}
            </div>
        </div>
    )
}

export default Navbar;
