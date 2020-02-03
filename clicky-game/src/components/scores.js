import React from "react";
import "./scores.css";

const Score = props => (
  <div className="gameScore">
    <h2 className="score">Your Score: {props.total}</h2>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;