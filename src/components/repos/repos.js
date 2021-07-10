import React from "react";
import "./repos.css";
import Repo from "../repo/repo";
import Placeholder from "../placeholder/placeholder";

// import {Link} from 'react-router-dom';

const Repos = (props) => {
  const { repoObj, isLoaded } = props;
  if (isLoaded && repoObj) {
    return (
      <>
        <div className="repos-container">
          {/* <Link to="/Gitfolio"><div style={{textAlign: "center"}}><button className="btn aboutBtn">About</button></div></Link> */}
          <h1 className="work">Work.</h1>
          <div className="repo-container">
            {repoObj.map((obj) => {
              if (!obj.fork && !(obj.name.indexOf("roh8raut.github.io") > -1)) {
                return <Repo key={obj.id} repoObj={obj} />;
              }
              return "";
            })}
          </div>

          <h1 className="fork">Fork.</h1>
          <div className="repo-container">
            {repoObj.map((obj) => {
              if (obj.fork) {
                return <Repo key={obj.id} repoObj={obj} />;
              }
              return "";
            })}
          </div>
        </div>
      </>
    );
  } else {
    var repoHolder = [];
    for (let i = 0; i < 8; i++) {
      repoHolder.push(i);
    }
    console.log(repoHolder);
    return (
      <div className="repos-container">
        <h1 className="work">Work.</h1>
        <div className="repo-container">
          {repoHolder.map((r) => (
            <div className="placeholder-container">
              <Placeholder
                width="100%"
                height="100%"
                styleObj={{ backgroundColor: "" }}
              >
                {/* <rect width="200" height="100" className="shine" /> */}
              </Placeholder>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Repos;
