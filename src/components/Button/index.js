import React from 'react';

import './button.css';

const Button = (props) => {
  const iconClasses = props.iconClasses.join(" ");
  const { btnName , click } = props;

  return (
    <div className ="bu345ResetBtn">
      <button
        onClick={click}
      >
        <div className="bu345FlexBtn">
          <div className = "bu345BtnName">{btnName}</div>
          <div><i className={iconClasses}></i></div>
        </div>
      </button>
    </div>
  );
}
export default Button;
