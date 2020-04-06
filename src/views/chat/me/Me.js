import React from "react";

// import PropTypes from "prop-types";

import "./style.css";

const Me = () => {
  return (
    <div>
      <img
        alt="..."
        className="img-circle img-no-padding img-responsive img-height"
        src={require("assets/img/faces/kaci-baum-2.jpg")}
      />
    </div>
  );
};

Me.propTypes = {};

export default Me;
