import React, { useEffect } from 'react';
import './App.css';
import Main from '../main/main';
import Switch from '../../components/switch/switch'
import useToggle from '../customHooks/useToggle';

function App() {
  const [toggle, toggleElem] = useToggle();

  return (
    <div className={`App ${toggle ? 'theme-dark' : 'theme-light'}`}>
      <Switch on={toggle} toggle={toggleElem} />
      <Main />
    </div>
  );
}

export default App;
