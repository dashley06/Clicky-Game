import React from "react";
import "./Header.css";

const Header = props => {
    return(
    <div className="header container">
        <div id="title">Click a TV Icon!</div>
        <div id="directions">Don't Click the Same Person Twice!</div>
        <div id="scoreDiv">Score: {props.score}</div>
    </div>
    )};

export default Header;