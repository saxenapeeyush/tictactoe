import React from "react";
import { withRouter } from 'react-router-dom';

import { ticTacToe } from '../../utils/helper';

import Box from "../Box";
import Loader from "../Loader";
import Button from "../Button";
import Error from "../Error";
import PlayerNameTagline from "../PlayerNameTagline";

import "./BoxContainer.css";

class BoxContainer extends React.Component {

  constructor(props) {

    super(props);

    const stateOfForm = this.props.location.state.details;

    const initialPlayerNames = stateOfForm.initialPlayerNames;

    const eitherXorO = stateOfForm.eitherXorO;

    this.state = {
      boxes: Array(9).fill(null),
      currentXorO: eitherXorO,
      isLoading: true,
      winnerName: "",
      playerNames: initialPlayerNames,
      errorMessage: "",
      counter: 0,
      isGameDrawn : false
    };

  }

  componentDidMount() {

    this.initializeLoading();

  }

  render() {

    const { errorMessage , isLoading , playerNames , winnerName ,currentXorO , isGameDrawn } = this.state;

    if (errorMessage.trim()) {

      return <Error msg={errorMessage.trim()} />;

    } else if (isLoading) {

      return <Loader />;

    } else
      return (
        <div className="bc598MainContainer">
          <div className="bc598OuterBoxContainer">
            <div>
              <PlayerNameTagline gameDrawn = {isGameDrawn} isXorO = {currentXorO}
                playerNames={playerNames}
                isWinner={winnerName}
              />
              <div className="bc598BoxContainer">
                
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
      <div>
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
              isDisabled = {content ? true : false}
              isBreakLine = {true}
              boxClick={this.boxClickHandler.bind(this, idx)}
              data={content}
              key={idx}
           />
        );
      }

      else { 
        count++;
        return (
          <Box
            isDisabled = {content ? true : false}
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
      isGameDrawn : false
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

    const checkIfWinner = ticTacToe(boxes);

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

      this.makeAllBoxDisable();

      setTimeout(() => {
          this.reset();
          this.makeAllBoxEnable();
      },2500);
    } 
    else if (this.state.counter === 8) {
      this.setState({isGameDrawn : true});
      setTimeout(() => {
        this.reset();
      },2500);
    }
  };

  makeAllBoxDisable = () => {

    const newBoxes = Array(9).fill("-");
    this.setState({boxes:newBoxes});

  }

  makeAllBoxEnable = () => {

    const newBoxes = Array(9).fill(null);
    this.setState({boxes:newBoxes});

  }

}
export default withRouter(BoxContainer);
