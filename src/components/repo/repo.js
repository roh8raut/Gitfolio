import React from "react";
import "./repo.css";
import Placeholder from "../placeholder/placeholder";
import codeIcon from "../../assets/icons/code.svg";

const Repo = (props) => {
  const handleClick = () => {
    window.open(props.repoObj.url);
  };

  const handlePrototypeClick = (e) => {
    e.stopPropagation();
    window.open(props.repoObj.homePage);
  };
  const repoObj = props.repoObj;

  // const changeBackground = (e) => {
  //     console.log("isnide onclick")
  //     const colors = ["#ffe254", "#ffefa0", "#f0e68c", "#ffd07d", "#ffef00", "#eedc82"];
  //     const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
  //     document.documentElement.style.cssText = `
  //         --repo-background-hover: ${randomColor()}
  //     `
  // };

  return (
    <div className="repo__card" onClick={handleClick}>
      <h2>{(repoObj && repoObj.name) || <Placeholder width="150" />}</h2>
      <div className="desc">
        {(repoObj && repoObj.desc) || <Placeholder width="350" />}
      </div>
      <div className="section-footer">
        {repoObj && repoObj.language ? (
          <>
            <img src={codeIcon} alt="code-icon" className="width__1" />
            <span className="language">{repoObj.language}</span>
            {repoObj.homePage ? (
              <strong className="prototype" onClick={handlePrototypeClick}>
                Prototype
              </strong>
            ) : (
              ""
            )}
          </>
        ) : (
          <Placeholder width="100" />
        )}
      </div>
    </div>
  );
};

export default Repo;
