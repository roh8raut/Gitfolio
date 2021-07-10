import React, { useState, useEffect } from "react";
import Profile from "./../profile/profile";
import Repos from "../repos/repos";
import * as user from "../../stub/user.json";
import * as repo from "../../stub/repo.json";

const Portfolio = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [repoDetails, setRepoDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const userAndRepoDetails = sessionStorage.getItem("detail");

    if (userAndRepoDetails) {
      const decodeData = JSON.parse(atob(userAndRepoDetails));
      setUserDetails(decodeData.userDetails);
      setRepoDetails(decodeData.repoDetails);
      setIsLoaded(true);
    } else {
      (async () => {
        const data = {};
        const ud = await fetchUserDetail()
          .then((datas) => {
            return datas;
          })
          .catch((err) => {
            return user.default;
          });

        const rd = await fetchRepos()
          .then((datas) => {
            return datas;
          })
          .catch((err) => {
            return repo.default;
          });

        data.userDetails = ud;
        data.repoDetails = rd;
        sessionStorage.setItem("detail", btoa(JSON.stringify(data)));

        setUserDetails(ud);
        setRepoDetails(rd);
        setIsLoaded(true);
      })();
    }
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
    <div className="main-container max-width-1400 margin-auto">
      <Profile userObj={userDetails} />
      <Repos repoObj={finalRepoObj} isLoaded={isLoaded} />
    </div>
  );
};

const fetchUserDetail = () => {
  return fetch("https://api.github.com/users/roh8raut").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  });
};

const fetchRepos = () => {
  return fetch("https://api.github.com/users/roh8raut/repos").then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong");
    }
  });
};

export default Portfolio;
