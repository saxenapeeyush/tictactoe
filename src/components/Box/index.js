import React from "react";

import "./Box.css";

const Box = (props) => {
  const { data , boxClick } = props;

  const newData = data ? data : "-";
  const isDisabled = newData.trim() !== '-';
  
  return (
  <div onClick={boxClick} className={`box ${isDisabled ? "disable":"enable"}`}>{newData}</div>
  );
};

export default Box;
