import React from "react";

import { TAG_LINE , WINNER_TAG_LINE , GAME_DRAWN } from '../../utils/configs/config';

import Player from './Player';

import "./PlayerNameTagline.css";

const PlayerNameTagline = (props) => {
  
  const { playerNames , isWinner , isXorO , gameDrawn } = props;

  const chancePlayerName = isXorO === playerNames?.first?.XorO ? playerNames?.first?.firstPlayerName : playerNames?.second?.secondPlayerName;

  return (
    <div className = "pnt670PlayerNameTagline">
      <Player playerChoose = {playerNames.first.XorO} playerName = {playerNames.first.firstPlayerName} playerScore = {playerNames.first.firstPlayerScore}/>
      {isWinner ? (
        <h3 className="pnt670TagLine">
          {WINNER_TAG_LINE} <span className = "pnt670PlayerNameStyle">{isWinner}</span>
        </h3>
      ) : (
        <div>
          {gameDrawn ? <h3 className="pnt670TagLine">{GAME_DRAWN}</h3> :
          <div>
            <h3 className="pnt670TagLine">{TAG_LINE}</h3>

            <h4 className = "pnt670TagLine">Chance of <span style = {{color:"#014750"}}>{chancePlayerName}({isXorO})</span></h4>
          </div>
          }
        </div>
      )}
      <Player playerChoose = {playerNames.second.XorO} playerName = {playerNames.second.secondPlayerName} playerScore = {playerNames.second.secondPlayerScore}/>
    </div>
  );
};
export default PlayerNameTagline;
