import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Landingpage from "../landingpage/landingpage";
import Portfolio from "./portfolio";
import Navbar from "../navbar/navbar";
import ScrollToTop from "../../utility/scrolltotop";
import Contact from "../contact me/contact";
import "./main.css";

const Main = (props) => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/">
          {<Redirect to="/Gitfolio" />}
        </Route>
        <Route exact path="/Gitfolio/repo">
          <Portfolio />
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
