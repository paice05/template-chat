import React from "react";

// import PropTypes from "prop-types";

import "./style.css";

const Content = () => {
  return (
    <ol className="chat">
      <li className="other">
        <div className="msg">
          <p>Olá</p>
          <div className="time">20:17</div>
        </div>
      </li>
      <li className="other">
        <div className="msg">
          <p>
            Preciso de umPreciso de um ajuda !!! Poderia ver pra mim ?Preciso de
            um ajuda !!! Poderia ver pra mim ?Preciso de um ajuda !!! Poderia
            ver pra mim ?Preciso de um ajuda !!! Poderia ver pra mim ?Preciso de
            um ajuda !!! Poderia ver pra mim ? ajuda !!! Poderia ver pra mim ?
          </p>
          <div className="time">20:17</div>
        </div>
      </li>
      <li className="self">
        <div className="msg">
          <p>Boa note.. Como vai ??</p>
          <div className="time">20:18</div>
        </div>
      </li>
      
    </ol>
  );
};

Content.propTypes = {};

export default Content;
