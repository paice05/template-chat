import React from "react";

// import PropTypes from "prop-types";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages
import RegisterPage from "./views/register";
import ChatPage from "./views/chat";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <RegisterPage {...props} />} />
        <Route exact path="/chat" render={(props) => <ChatPage {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

Routes.propTypes = {};

export default Routes;
