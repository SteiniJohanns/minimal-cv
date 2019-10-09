import React from 'react';
import './HeaderInfo.css';
import logo from './myLogo.jpg';

const Info = () => {
  return (
    <div className="Header">
      <div className="HeaderLeft">
        <div className="HeaderLeftName">Aðalsteinn Jóhannsson</div>
        <div className="HeaderLeftSub">
          The man of the hour, the man with the power
        </div>
      </div>
      <div className="HeaderRight">
        <img src={logo} alt="HUNDUR" />
      </div>
    </div>
  );
};

export default Info;
