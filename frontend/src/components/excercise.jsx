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
        <div>
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
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1">
                <div id="question">
                  <h4>Question</h4>
                  <p>question text</p>
                </div>

                <div id="submit">
                  <button className="fancy-btn">button</button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default Exercise;

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <small>
          You can find the code repo on{" "}
          <a href="https://github.com/Flopet17/quiz-app">Github</a>. Feel free
          to make any pull requests to improve the aplication.
        </small>
        <p>
          Built with <span>&hearts;</span> by{" "}
          <a href="http://florin-pop.com">Florin Pop</a>
        </p>
      </footer>
    );
  }
}
