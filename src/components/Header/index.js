import React from "react";

import { GAME_NAME } from '../../utils/configs/config';

import "./header.css";

const Header = (props) => {
  
  return (
    <div className="he219Header">
      <h1>{GAME_NAME} Game</h1>
    </div>
  );
};

export default React.memo(Header);
