import React from "react";
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import { UTILITY , EITHER_X_OR_O , NAME_VALIDATOR } from "./utils/configs/config";

import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import BoxContainer from './components/BoxContainer';

import "./App.css";

class App extends React.Component {

  state = {
    firstName : UTILITY.initialPlayerNames.first.firstPlayerName,
    secondName : UTILITY.initialPlayerNames.second.secondPlayerName,
    firstPlayerChooses : EITHER_X_OR_O,
    validator : {
      isError : false,
      errorMsg : "",
    },
    isLoggedIn : false
};

  render() {


    const { firstName , secondName , validator , firstPlayerChooses , isLoggedIn } = this.state;

    return (
    <div className="App">


      <BrowserRouter>
      <Header />
      {validator.isError ? <Error msg = {validator.errorMsg}/> : null}
        <Switch>

          <Route 
          path = "/" 
          exact 
          render = {() => <Form onSubmitHandler = {this.submitFormHandler}
          chooseXorO = {this.chooseXorO} 
          firstPlayerChooses = {firstPlayerChooses}
          getName = {this.getName}
          firstName = {firstName}
          secondName = {secondName}
          isLoggedIn = {isLoggedIn}
          />} />

          <Route path = "/game" render = {() => <BoxContainer />} />

        </Switch>

      </BrowserRouter>

    </div>
    );
  }

  getName = (event) => {

    const name = event.target.name;
  
    const value = event.target.value;
    
    const checker = (name === 'form378FirstNameInput');
  
    let isError = false;
  
    let errorMsg = '';
  
    if(value.trim().length < 3) {
  
      isError = true;
      errorMsg = (checker === true) ? `First ${NAME_VALIDATOR}` : `Second ${NAME_VALIDATOR}`
  
    } 
  
    const newValidator = {
      isError,errorMsg
    }
  
    checker ? this.setState({firstName:value,validator:newValidator}) : this.setState({secondName : value,validator:newValidator});
  
  }

  chooseXorO = (event) => {

    const choose = event.target.value;
  
    this.setState({firstPlayerChooses : choose});
  
  }

  submitFormHandler = (event) => {

    const { validator } = this.state;

    event.preventDefault();
  
    if(validator.isError) {
      alert("Please check the Errors !");
      return;
    }

    this.setState({isLoggedIn : true});
  
  }

}

export default App;
