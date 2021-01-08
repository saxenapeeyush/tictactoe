import React from 'react';

import './player.css';

const Player = (props) => {
  const { playerName , playerScore , playerChoose } = props;
  
  return (
    <div className="pl367Player">
      <h2 className="pl367PlayerName">{playerName} ({playerChoose})</h2>
      <h2>{playerScore ? playerScore : "0"}</h2>
    </div>
  );
}
export default Player;
