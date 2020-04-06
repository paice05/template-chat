import React, { useState } from "react";

// import PropTypes from "prop-types";

import "./style.css";

const Search = () => {
  const [text, setText] = useState("");

  return (
    <div className="container-search">
      <div className="content-search container">
        <button className="button-search">
        <i className="fa fa-search icon-search" />
        </button>
        <input
          className="input-search"
          placeholder="Procurar conversa"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <i className="fa fa-times close-search" onClick={() => setText("")} />
        )}
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
