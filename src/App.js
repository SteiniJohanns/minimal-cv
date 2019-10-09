import React from 'react';
import './App.css';
import MainInfo from './MainInfo';
import HeaderInfo from './HeaderInfo';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header>
        <HeaderInfo></HeaderInfo>
      </header>
      <MainInfo></MainInfo>
    </div>
  );
}

export default App;
