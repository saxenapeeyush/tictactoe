import React from 'react';

import './Button.css';

const Button = (props) => {
  const iconClasses = props.iconClasses.join(" ");
  const { btnName , click } = props;

  return (
    <div>
      <button
        onClick={click}
      >
        <div className="flexBtn">
          <div>{btnName}</div>
          <div><i className={iconClasses}></i></div>
        </div>
      </button>
    </div>
  );
}
export default Button;
