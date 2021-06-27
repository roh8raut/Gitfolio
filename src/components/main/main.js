import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Profile from "./../profile/profile";
import Repos from "../repos/repos";
// import AboutMe from '../aboutme/aboutme';
import Landingpage from "../landingpage/landingpage";

import * as user from "../../stub/user.json";
import * as repo from "../../stub/repo.json";

import "./main.css";
import Navbar from "../navbar/navbar";
// import Contact from '../contact me/contact';
import ScrollToTop from "../../utility/scrolltotop";
import Contact from "../contact me/contact";

const Main = (props) => {
  const [userDetails, setUserDetails] = useState([]);
  const [repoDetails, setRepoDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/roh8raut")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((datas) => {
        setUserDetails(datas);
      })
      .catch((err) => {
        setUserDetails(user.default);
      });

    fetch("https://api.github.com/users/roh8raut/repos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((datas) => {
        const sortByUpdate = datas.sort((a, b) => {
          return new Date(b.updated_at) - new Date(a.updated_at);
        });

        setRepoDetails(sortByUpdate);
        setIsLoaded(true);
      })
      .catch((err) => {
        setRepoDetails(repo.default);
        setIsLoaded(true);
      });

    setTimeout(() => {
      const lists = [...document.querySelectorAll('[class^="css-"]')];
      // eslint-disable-next-line no-unused-vars
      for (const list of lists) {
        list.style.display = "none";
      }
    }, 7000);
  }, []);

  const finalRepoObj = repoDetails.map((repo) => {
    return {
      name: repo.name,
      desc: repo.description,
      url: repo.html_url,
      language: repo.language,
      id: repo.id,
      fork: repo.fork,
      homePage: repo.homepage,
    };
  });

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/">
          {<Redirect to="/Gitfolio" />}
        </Route>
        <Route exact path="/Gitfolio/repo">
          <div className="main-container">
            <Profile userObj={userDetails} />
            <Repos repoObj={finalRepoObj} isLoaded={isLoaded} />
          </div>
        </Route>
        <Route exact path="/Gitfolio/contact">
          <Contact />
        </Route>
        <Route exact path="/Gitfolio">
          <Landingpage />
        </Route>
      </Router>
    </>
  );
};

export default Main;
