import React, { useEffect, useRef } from "react";
import "./profile.css";
import Placeholder from "../placeholder/placeholder";

import twitterIcon from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import personIcon from "../../assets/icons/person.svg";
import locationIcon from "../../assets/icons/location.svg";
import { gsap } from "gsap";

const Profile = (props) => {
  const userObj = props.userObj;
  const avatarRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({ delay: 0.5 })
      .from(avatarRef.current, {
        scale: 0,
        ease: "elastic",
        // autoAlpha: 0,
      })
      .from(document.querySelectorAll(".content-user-details div"), {
        y: 25,
        ease: "power4.easeIn",
        duration: 0.3,
        stagger: 0.3,
        autoAlpha: 0,
      })
      .from(document.querySelectorAll(".content__addinfo p"), {
        y: 25,
        stagger: 0.3,
        duration: 0.3,
        ease: "power4.easeIn",
        autoAlpha: 0,
      });
  }, []);

  return (
    <div className="profile-container">
      <div className="content">
        <div className="avatar" ref={avatarRef}>
          <img
            src={`https://www.svgrepo.com/show/37286/boy.svg`}
            alt="avatar"
            onLoad={(e) => (e.target.style.display = "block")}
          />
        </div>
        <div className="content-user-details">
          <div className="content__name " style={{ "--order": 1 }}>
            <span>
              {(userObj && userObj.login) || <Placeholder width="100" />}
            </span>
          </div>
          <div className="content__link " style={{ "--order": 2 }}>
            <a href="https://github.com/roh8raut">@rohit_raut</a>
          </div>
        </div>
        <div className="content__addinfo">
          <p className="content__addinfo--location " style={{ "--order": 3 }}>
            <img src={locationIcon} alt="twitter-icon" className="width__2" />
            <span>Mumbai</span>
          </p>

          <p className="content__addinfo--available " style={{ "--order": 4 }}>
            <img src={personIcon} alt="twitter-icon" className="width__2" />
            <span>Available</span>
          </p>

          <p className="content__addinfo--social " style={{ "--order": 5 }}>
            <a href="https://twitter.com/wierdorohit123">
              <img src={twitterIcon} alt="twitter-icon" className="width__2" />
            </a>
            <a href="https://in.linkedin.com/in/rautrohit">
              <img
                src={linkedinIcon}
                className="width__2"
                alt="linkedin icon"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
  //  } else {
  //     return (<p>Loading....</p>)
  // }
};

export default Profile;
