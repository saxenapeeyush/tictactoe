import React from "react";

import Utility from "../../utils/configs/config";
import Logic from "../../businesslogics/gamelogic/tictactoelogic";

import Box from "../Box";
import Header from "../Header";
import Loader from "../Loader";
import Button from "../Button";
import Error from "../Error";
import PlayerNameTagline from "../PlayerNameTagline";

import "./BoxContainer.css";

class BoxContainer extends React.Component {

  state = {
    boxes: Array(9).fill(null),
    currentXorO: Utility.eitherXorO,
    isLoading: true,
    winnerName: "",
    playerNames: Utility.initialPlayerNames,
    errorMessage: "",
    counter: 0,
  };

  componentDidMount() {
    this.initializeLoading();

    setTimeout(() => {
      this.takeInputFromUser();
    }, 1000);
  }

  render() {

    const { errorMessage , isLoading , playerNames , winnerName ,currentXorO } = this.state;

    if (errorMessage.trim()) {
      return <Error msg={errorMessage.trim()} />;
    } else if (isLoading) {
      return <Loader />;
    } else
      return (
        <div className="mainContainer">
          <Header />
          <div className="outerBoxContainer">
            <div>
              <PlayerNameTagline isXorO = {currentXorO}
                playerNames={playerNames}
                isWinner={winnerName}
              />
              <div className="boxContainer">
                
                {this.getBoxes()}

              </div>
              <div>
                
                {this.getButton()}
                
              </div>
            </div>
          </div>
        </div>
      );
  }

  getButton = () => {
    return (
      <div className="resetBtn">
        <Button
          click={this.reset}
          btnName="Reset"
          iconClasses={["fas", "fa-redo"]}
        />
      </div>
    );
  };

  getBoxes = () => {
    const { boxes } = this.state;
    let count = 1;
    return boxes.map((content, idx) => {
      if(count % 3 === 0) {
        count++;
        return (
            <Box 
              isBreakLine = {true}
              boxClick={this.boxClickHandler.bind(this, idx)}
              id={idx}
              data={content}
              key={idx}
           />
        );
      }

      else { 
        count++;
        return (
          <Box
            isBreakLine = {false}
            boxClick={this.boxClickHandler.bind(this, idx)}
            id={idx}
            data={content}
            key={idx}
          />
        );
      }
    });
  };

  takeInputFromUser = () => {
    const { playerNames,currentXorO }  = this.state;
    const { chooseXorONotSpecified , nameNotSpecified , nullChecker } = Utility;

    let firstName = prompt(
      "Enter First Player Name ? ",
      playerNames.first.firstPlayerName
    );

    if (nullChecker(firstName)) {

      this.nullCheckerErrorHandler("First",nameNotSpecified);
      return;

    } 
    else if (firstName.trim().length === 0) {

      firstName = playerNames.first.firstPlayerName;
    
    }

    const option1 = prompt("Choose X or O ? ", currentXorO);
    
    if (nullChecker(option1)) {

      this.nullCheckerErrorHandler(chooseXorONotSpecified,"");
      return;

    }

    const secondName = prompt(
      "Enter Second Player Name ? ",
      playerNames.second.secondPlayerName
    );

    if (nullChecker(secondName)) {

      this.nullCheckerErrorHandler("Second",nameNotSpecified);
      return;

    }

    const option2 = option1 === "X" ? "O" : "X";

    const playersObjects = playerNames;

    playersObjects.first.firstPlayerName = firstName.trim();
    playersObjects.first.XorO = option1;

    playersObjects.second.secondPlayerName = secondName.trim();
    playersObjects.second.XorO = option2;

    this.setState({ playerNames: playersObjects });
  }

  nullCheckerErrorHandler = (content,nameNotSpecified) => {

    this.setState({
      errorMessage: `${content} ${nameNotSpecified}`,
    });

  }

  initializeLoading = () => {

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);

  }

  reset = () => {

    this.setState({
      boxes: Array(9).fill(null),
      counter: 0,
      winnerName: "",
    });

  };

  boxClickHandler = (idx) => {

    const { boxes : newBoxes , currentXorO , counter , playerNames} = this.state;
    newBoxes[idx] = currentXorO;

    const newCurrentXorO = currentXorO === "X" ? "O" : "X";
    let curCounter = counter;

    this.setState({
      boxes: newBoxes,
      currentXorO: newCurrentXorO,
      counter: curCounter + 1,
    });
    
    const { boxes } = this.state;

    const checkIfWinner = Logic.ticTacToe(boxes);

    if (checkIfWinner) {

      const playersObjects = { ...playerNames };
      let winnerName = "";

      if (playersObjects.first.XorO === checkIfWinner) {
        winnerName = playersObjects.first.firstPlayerName;
        playersObjects.first.firstPlayerScore++;
      } 
      else {
        winnerName = playersObjects.second.secondPlayerName;
        playersObjects.second.secondPlayerScore++;
      }

      this.setState({
        boxes: Array(9).fill(null),
        playerNames: playersObjects,
        winnerName: winnerName,
        counter: 0,
      });
      setTimeout(() => {
          this.reset();
      },2500);
    } 
    else if (this.state.counter === 8) {
      this.reset();
    }
  };
}
export default BoxContainer;
