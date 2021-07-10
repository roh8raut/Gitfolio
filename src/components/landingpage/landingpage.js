import React, { useEffect, useRef } from "react";
import "./landingpage.css";

import Coding from "../../assets/coding.svg";
import blob1 from "../../assets/blob1.svg";
import blob2 from "../../assets/blob2.svg";
import blob3 from "../../assets/blob3.svg";
import star from "../../assets/star.svg";
import brackets from "../../assets/brackets.svg";
import N from "../../assets/drawing.svg";
import Button from "../common/buttons/buttons";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { SplitText } from "gsap/types/split-text";

const Landingpage = () => {
  const headingTextRef = useRef(null);
  const iconOneRef = useRef(null);
  const scrollTriggerRefTest = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline()
      .from(headingTextRef.current.querySelectorAll("div"), {
        y: 25,
        duration: 0.5,
        delay: 0.5,
        ease: "power4.easeIn",
        stagger: 0.3,
        autoAlpha: 0,
      })
      .from(iconOneRef.current, {
        x: -100,
        scale: 0.1,
        duration: 0.5,
      })
      .from(".svg-icon-container .blob", {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        stagger: 0.3,
        autoAlpha: 0,
      });

    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function () {
        gsap.from(".border-bottom-blue", {
          //   width: 160,
          ease: "power4.easeIn",
          // duration: 5,
          scrollTrigger: {
            trigger: ".about__section",
            start: "top top+=150",
            end: "center top+=200",
            scrub: true,
            // markers: true,
          },
        });
      },
    });
    // .from(

    gsap.from(".about__section p  span", {
      y: 10,
      delay: 3,
      ease: "power4.easeIn",
      stagger: 0.3,
      autoAlpha: 0,
      // scrollTrigger: {
      //   trigger: ".about__section",
      //   start: "top top+=100",
      //   // scrub: true,
      //   markers: true,
      // },
    });
  }, []);
  return (
    <div className="max-width-1400 margin-auto">
      <div className="intro">
        {/* <div className="svg-icon-container">
          <div>
            <img ref={iconOneRef} src={blob1} className="blob1" alt="desk" />
          </div>
          <div>
            <img src={brackets} className="blob yellowface" alt="desk" />
          </div>
          <div>
            <img src={star} className="blob blob2 " alt="desk" />
          </div>
          <div>
            <img src={blob3} className="blob blob3 bounce-animate" alt="desk" />
          </div>
          <div>
            <img src={blob2} className="blob blob4" alt="desk" />
          </div>
        </div> */}
        <div className="">
          <img src={Coding} className="desk" alt="desk" />
        </div>
        <div className="profile-card">
          {/* <p style={{ "--order": 3 }}>Hey,I am Rohit Raut</p>
                    <p style={{ "--order": 5 }}> and I love building </p>
                    <p style={{ "--order": 7 }}>beautiful websites</p> */}
          <h2 ref={headingTextRef}>
            <div className="global-underline">Hey! I'm Rohit Raut👋</div>
            <div className="global-underline">I'm a web developer</div>
            <div className="global-underline">
              with passion for <span style={{ color: "#7777f9" }}>UI/UX</span>
            </div>
          </h2>
        </div>
        {/* <img src={Prof} alt="profile image" /> */}
        <div className="about__img">
          <img
            src={N}
            className="about_img"
            alt="img beside anout me section"
          />
        </div>
        <div className="about__section">
          <div>
            <h1 className="border-bottom-blue" ref={scrollTriggerRefTest}>
              <span>About Me</span>
            </h1>
          </div>
          <div>
            <p className="about-desc">
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
        <div className="contact_link_section">
          <div className={"ques"}>
            <h1>Interested in doing project together ?</h1>
          </div>
          <div
            className="contant-me-btn"
            style={
              {
                /* padding: "1em"*/
              }
            }
          >
            <Link to="/Gitfolio/contact">
              <Button
                text="Contact Me"
                classes="box-shadow-green color-white background-orange"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
