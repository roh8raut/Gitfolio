import React from "react";
import "./landingpage.css";

import Coding from "../../assets/coding.svg";
import blob1 from "../../assets/blob1.svg";
import blob2 from "../../assets/blob2.svg";
import blob3 from "../../assets/blob3.svg";
import star from "../../assets/star.svg";
import yellowface from "../../assets/yellowface.svg";
import N from "../../assets/drawing.svg";
import Button from "../common/buttons/buttons";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      <div className="intro">
        <div className="svg-icon-container">
          <img src={blob1} className="blob1" alt="desk" />
          <img src={yellowface} className="yellowface" alt="desk" />
          <img src={star} className="blob2 spin-animate" alt="desk" />
          <img src={blob3} className="blob3 bounce-animate" alt="desk" />
          <img src={blob2} className="blob4" alt="desk" />
        </div>
        <img src={Coding} className="desk" alt="desk" />
        <div className="profile-card">
          {/* <p style={{ "--order": 3 }}>Hey,I am Rohit Raut</p>
                    <p style={{ "--order": 5 }}> and I love building </p>
                    <p style={{ "--order": 7 }}>beautiful websites</p> */}
          <h2 className="global-underline">
            Hey,I am Rohit Raut and I love building beautiful websites
          </h2>
        </div>
        {/* <img src={Prof} alt="profile image" /> */}
        <div className="about__img">
          <img
            src={N}
            className="about_img"
            alt="img beside anout me section"
            data-aos="fade-up"
          />
        </div>
        <div className="about__section">
          <div data-aos="fade-up">
            <h1 className="border-bottom-blue">
              <span>About Me</span>
            </h1>
            <p>
              I'm a front-end developer with professional experience. I write
              accessible HTML, modern CSS and follow best practices of
              javascript. I specialize in React and Typescript. Apart from this
              you'll find me into sports especially Football. Ask me out for
              Swimming and you would'nt be disappointed. Travelling is fun since{" "}
              <strong style={{ color: "#00e6cb" }}>SAINT AUSTINE</strong> has
              already said{" "}
              <strong>
                "THE WORLD IS A BOOK AND THOSE WHO DO NOT TRAVEL READ ONLY FIRST
                PAGE".
              </strong>{" "}
              Well that said I'd love you to checkout my portfolio projects and
              also you can connect to me through linkedin or twitter.
            </p>
          </div>
        </div>
        <h1 className="ques" data-aos="fade-down-right">
          Interested in doing project together ?
        </h1>
        <div style={{ justifySelf: "center", padding: "1em" }}>
          <Link to="/Gitfolio/contact">
            <Button
              text="Contact Me"
              classes="box-shadow-green color-white background-orange"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
