import React from "react";

import "./Box.css";

const Box = (props) => {

  const { data , boxClick , isBreakLine , isDisabled } = props;
  return (
    <div onClick={boxClick} className={`b490Box ${isDisabled ? "b490Disable":"b490Enable"}`}>
    <div>{data ? data : '-'}</div>
    {isBreakLine ? <br/> : null }
    </div>
    );
};

export default Box;
