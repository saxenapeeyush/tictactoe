import React from 'react';

import './playerLabel.css';

const PlayerLabel = (props) => {

  const { label , inputType , onChangeFunBind , value , name } = props;

  return (

    <div className = "pl690PlayerLabelContainer">

          <div><label htmlFor = {name}>{label} : </label></div>

          <input autoComplete = "off" id = {name} name = {name} type = {inputType} value = {value} onChange = {onChangeFunBind} />

    </div>

  );

}

export default PlayerLabel;
