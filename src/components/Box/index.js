import React from "react";

import "./Box.css";

const Box = (props) => {
  const { data , boxClick , isBreakLine } = props;

  const newData = data ? data : "-";
  const isDisabled = newData.trim() !== '-';
  
  if(isBreakLine) {
    return (
    <div onClick={boxClick} className={`box ${isDisabled ? "disable":"enable"}`}>{newData} <br/></div>
    );
  }
  else {
    return (
    <div onClick={boxClick} className={`box ${isDisabled ? "disable":"enable"}`}>{newData}</div>
    );
  }
};

export default Box;
