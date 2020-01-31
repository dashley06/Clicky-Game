import React from "react";
import "./header.css";


function header({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
    <h1 className="display-4">Clicky Game</h1>
    <p className="lead">Test your memory skills!</p>
  </div>
      {children}
    </div>
  );
}

export default header;