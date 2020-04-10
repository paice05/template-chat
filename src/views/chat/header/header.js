import React from "react";

// import PropTypes from "prop-types";

import "./style.css";

const Header = () => {
  return (
    <div className="grid grid-content">
      <div>
        <img
          alt="..."
          className="img-circle img-no-padding img-responsive img-height"
          src={require("assets/img/faces/kaci-baum-2.jpg")}
        />
      </div>
      <div>
        <p className="name-header" style={{ margin: "0 7px" }}> Matheus Paice </p>
        <span style={{ margin: "0 7px", fontSize: "11px" }}> Online </span>
      </div>
      <div class="content-center">
        <i className="fa fa-search" />
        <i class="fa fa-paperclip" />
        <i class="fa fa-ellipsis-v" />
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
