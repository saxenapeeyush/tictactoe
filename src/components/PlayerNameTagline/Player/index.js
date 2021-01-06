import React from 'react';

import './Player.css';

const Player = (props) => {
  const { playerName , playerScore , playerChoose } = props;
  
  return (
    <div className="player">
      <h2 className="playerName">{playerName} ({playerChoose})</h2>
      <h2>{playerScore ? playerScore : "0"}</h2>
    </div>
  );
}
export default Player;
