import React, { Component } from "react";
import Sentence from "./sentence";

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: "" };
  }

  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  };

  onFormSubmit = (event) => {
    this.setState({ answer: event.target.value });
  };

  nextSentence = (event) => {
    //TODO
  };

  render() {
    return (
      <React.Fragment>
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
