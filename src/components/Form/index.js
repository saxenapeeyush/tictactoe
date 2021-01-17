import React from 'react';
import { withRouter } from 'react-router-dom';

import { UTILITY } from '../../utils/configs/config';

import PlayerLabel from './components/PlayerLabel';
import Button from '../Button';
import RadioButton from '../RadioButton';

import './form.css';

const Form = (props) =>  {

  const { firstName , secondName , getName , firstPlayerChooses , chooseXorO , isLoggedIn , onSubmitHandler } = props;

    if(isLoggedIn) {
      setTimeout(() => {
        onSubmitHandle();
      });
      return null;
    }

    return (

      <div className = "fo489PlayerForm">

      <form onSubmit = {onSubmitHandler}>

        <PlayerLabel name = "form378FirstNameInput" value = {firstName} label = "Enter First Player Name " onChangeFunBind = {getName}/>
        
        <PlayerLabel name = "form378SecondNameInput" value = {secondName} label = "Enter Second Player Name " onChangeFunBind = {getName} />
        <div>
          <div className ="radioBtn">

          <label>Choose X or O for First Player : </label> 

            <RadioButton chooseXorOHandler = {chooseXorO} check = {firstPlayerChooses === 'X'} defaultValue = {"true"} value="X" name="chooseXorO"/>

            <RadioButton chooseXorOHandler = {chooseXorO} check ={firstPlayerChooses === 'O'} defaultValue = {"false"} value="O" name="chooseXorO"/>

          </div>

        </div>

        <Button btnName = "Submit" iconClasses = {["fas","fa-angle-double-right"]}/>
      </form>
      
      </div>
    );

     function onSubmitHandle() {

      const initialPlayerNames = JSON.parse(JSON.stringify(UTILITY.initialPlayerNames));

      initialPlayerNames.first.firstPlayerName = firstName;

      initialPlayerNames.second.secondPlayerName = secondName;

      initialPlayerNames.first.XorO = firstPlayerChooses;

      const otherOptions = firstPlayerChooses === 'X' ? 'O' : 'X';

      initialPlayerNames.second.XorO = otherOptions;


      props.history.push({

        pathname: '/game',

        state: { details :
          {

          initialPlayerNames : initialPlayerNames,

          eitherXorO : firstPlayerChooses

        } 
      }
      })



    }

}

export default withRouter(Form);
