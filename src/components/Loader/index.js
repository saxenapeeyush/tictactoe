import React from "react";

import './Loader.css';

const Loader = (props) => {
  return (
    <div className="loaderContainer">
      <div className="loaderContent">
        <div>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      </div>
    </div>
  );
};
export default Loader;
