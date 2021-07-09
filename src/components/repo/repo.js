import React from "react";
import "./repo.css";
import Placeholder from "../placeholder/placeholder";
import codeIcon from "../../assets/icons/code.svg";

const Repo = (props) => {
  const { desc, language, name, homePage, url } = props.repoObj;
  const handleClick = () => {
    window.open(url);
  };

  const handlePrototypeClick = (e) => {
    e.stopPropagation();
    window.open(homePage);
  };

  return (
    <div className="repo__card " onClick={handleClick}>
      <h2 className="repo__name">
        <span>{name}</span>
      </h2>
      <div className="desc">{desc}</div>
      <div className="section-footer">
        <>
          <img src={codeIcon} alt="code-icon" className="width__1" />
          <span className="language">{language}</span>
          {homePage ? (
            <strong
              className="prototype global-underline"
              onClick={handlePrototypeClick}
            >
              Prototype
            </strong>
          ) : (
            ""
          )}
        </>
      </div>
    </div>
  );
};

// const changeBackground = (e) => {
//     console.log("isnide onclick")
//     const colors = ["#ffe254", "#ffefa0", "#f0e68c", "#ffd07d", "#ffef00", "#eedc82"];
//     const randomColor = () => colors[Math.floor(Math.random() * colors.length)];
//     document.documentElement.style.cssText = `
//         --repo-background-hover: ${randomColor()}
//     `
// };

export default Repo;
