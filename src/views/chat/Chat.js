import React from "react";

// import PropTypes from "prop-types";

import { Container, Row, Col, Button } from "reactstrap";

// components
import Content from "./content";
import Me from "./me";
import Sidebar from "./sidebar";
import Search from "./search";
import Footer from "./footer";
import Header from "./header";

import "./style.css";

const Chat = () => {
  return (
    <div className="container container-chat">
      <section class="grid grid-template-areas-1">
        <div class="item logo">
          <Me />
        </div>
        <div class="item nav">
          <Header />
        </div>
        <div class="item content">
          <Content />
        </div>
        <div className="item search">
          <Search />
        </div>
        <div class="item sidenav">
          <Sidebar />
        </div>
        <div class="item footer">
          <Footer />
        </div>
      </section>
    </div>
  );
};

Chat.propTypes = {};

export default Chat;
