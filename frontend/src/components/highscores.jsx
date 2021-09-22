import React, { Component } from "react";

import Home from "./home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Highscores() {
  return (
    <div>
      <h2>Highscores</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Highscores;
