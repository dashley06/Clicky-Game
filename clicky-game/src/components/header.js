import React from "react";
import "./Header.css";

const Header = props => {
    return(
    <div className="header container jumbotron-fluid">
        <div className="container-fluid">
            <div id="title display-4">
                <h1>Click a Popular 90's TV Icon!</h1>
                <h2>But, Don't Click the Same Person Twice!</h2>
                <h2>{props.score}</h2>
            </div>
        </div>
    </div>
    )};

export default Header;