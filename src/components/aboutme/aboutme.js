import React from "react";
import "./aboutme.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="landing-page">
      <h1 className="hello">Hello! I'm,</h1>
      <h1 className="name">
        Rohit
        <br />
        Raut
      </h1>
      <h3 className="profession-text">- Web Developer</h3>
      <p className="about-me-text-container">
        <span className="about--me">-ABOUT ME</span>
        <span>
          I'm a Pofessional Web developer. I have a passion for web development
          and love to create for web and mobile devices. I look forward to
          connect with like minded people, Learn from them and use technology to
          solve real life problems
        </span>
      </p>
      <Link to="/Gitfolio/repo">
        <div className="repoBtnBlock shake">
          <button className="btn repoBtn">
            <span>See my work!!</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default AboutMe;
