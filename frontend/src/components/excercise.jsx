import React, { Component } from "react";
import Sentence from "./sentence";

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
    return (
      <React.Fragment>
        <h3>counter: {this.state.counter}</h3>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="answer">answer</label>
          <input
            type="text"
            name="answer"
            value={this.state.answer}
            onChange={this.handleChange}
          />
        </form>

        <h3>Your answer is: {this.state.answer}</h3>
        <div>
          <Sentence />
          <button onClick={this.nextSentence}>Next Sentence</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Exercise;
