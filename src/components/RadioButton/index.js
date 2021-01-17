import React from 'react';

const RadioButton = (props) => {

  const { value , name , check , chooseXorOHandler } = props;

  return (

    <span>
    <input onChange = {chooseXorOHandler} checked = {check} type="radio" value={value} name={name}/> {value}
    </span>

  );

}

export default RadioButton;
