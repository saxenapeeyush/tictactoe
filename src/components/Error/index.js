import React from "react";

import './error.css';

const Error = (props) => {
  const { msg } = props;
  
  return (
    <div className="er908ErrorContainer">
      <div className="er908ErrorHeading">Error Occured</div>
      <p className="er908ErrorMsg">{msg}</p>
    </div>
  );
};

export default React.memo(Error);
