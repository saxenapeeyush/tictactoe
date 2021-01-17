import React from "react";

import './Loader.css';

const Loader = (props) => {
  return (
    <div className="lo965LoaderContainer">
      <div className="lo965LoaderContent">
        <div>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      </div>
    </div>
  );
};

export default React.memo(Loader);
