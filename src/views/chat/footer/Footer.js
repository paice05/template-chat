import React from "react";

// import PropTypes from "prop-types";

import "./style.css";

const Footer = () => {
  return (
    <section class="grid grid-template-columns-1">
      <div class="item">
        <i className="fa fa-smile-o" />
      </div>
      <div class="item">
        <textarea
          placeholder="Digite uma mensagem"
          className="textarea-footer"
        />
      </div>
      <div class="item">
        <i className="fa fa-send" />
      </div>
    </section>
  );
};

Footer.propTypes = {};

export default Footer;
