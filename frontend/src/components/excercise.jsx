import React, { Component } from "react";
import Sentence from "./sentence";
import Highscores from "./highscores";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: "", counter: 0 };
  }

  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  };

  onFormSubmit = (event) => {
    this.setState({ answer: event.target.value });
  };

  nextSentence = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    if (this.state.counter > 10) {
      return (
        <Switch>
          <Redirect to="/highscores" />
          <Route path="/highscores">
            <Highscores />
          </Route>
        </Switch>
      );
    } else {
      return (
        <React.Fragment>
          <Sentence counter={this.state.counter} />
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="answer">answer: </label>
            <input
              type="text"
              name="answer"
              value={this.state.answer}
              onChange={this.handleChange}
            />
          </form>
          <div>
            <button onClick={this.nextSentence}>Next Sentence</button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Exercise;
