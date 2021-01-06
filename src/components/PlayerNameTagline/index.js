import React from "react";

import Utility from "../../utils/configs/config";

import Player from './Player';

import "./PlayerNameTagline.css";

const PlayerNameTagline = (props) => {
  const playerNameStyle = {
    color:"#014750",
    textDecoration:"underline"
  }
  
  const { playerNames , isWinner , isXorO } = props;
  const { winnerTagLine ,tagLine } = Utility;

  return (
    <div className = "playerNameTagline">
      <Player playerChoose = {playerNames.first.XorO} playerName = {playerNames.first.firstPlayerName} playerScore = {playerNames.first.firstPlayerScore}/>
      {isWinner ? (
        <h3 className="tagLine">
          {winnerTagLine} <span style = {playerNameStyle}>{isWinner}</span>
        </h3>
      ) : (
        <div>
          <h3 className="tagLine">{tagLine}</h3>
          <h4 className = "tagLine">Chance of <span style = {{color:"#014750"}}>{isXorO}</span></h4>
        </div>
      )}
      <Player playerChoose = {playerNames.second.XorO} playerName = {playerNames.second.secondPlayerName} playerScore = {playerNames.second.secondPlayerScore}/>
    </div>
  );
};
export default PlayerNameTagline;
