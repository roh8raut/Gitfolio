import React, { useEffect, useRef } from "react";
import "./App.css";
import Main from "../main/main";
import Switch from "../../components/switch/switch";
import useToggle from "../customHooks/useToggle";

function App() {
  const [toggle, toggleElem] = useToggle();

  let initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      console.log("running effect", toggle);
      document.body.classList.toggle("theme-dark");
    }
  }, [toggle]);

  return (
    <div className="App overflow-x-hidden ">
      <Switch on={toggle} toggle={toggleElem} />
      <Main />
    </div>
  );
}

export default App;
