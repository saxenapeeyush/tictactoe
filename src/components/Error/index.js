import React from "react";

import './Error.css';

const Error = (props) => {
  const { msg } = props;
  
  return (
    <div className="errorContainer">
      <div className="errorHeading">Error Occured</div>
      <p className="errorMsg">{msg}</p>
    </div>
  );
};
export default Error;
