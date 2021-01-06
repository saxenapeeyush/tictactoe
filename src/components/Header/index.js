import React from "react";

import Utility from '../../utils/configs/config';

import "./Header.css";

const Header = (props) => {
  const { gameName } = Utility;
  
  return (
    <div className="header">
      <h1>{gameName} Game</h1>
    </div>
  );
};
export default Header;
