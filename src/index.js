import React from "react";
import ReactDOM from "react-dom";

import Routes from './routes'

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";

ReactDOM.render(
  <Routes />,
  document.getElementById("root")
);
