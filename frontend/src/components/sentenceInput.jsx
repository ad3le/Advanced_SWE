import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class SentenceInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="answer"></label>
          <input
            type="text"
            name="answer"
            value={this.props.answer}
            onChange={this.props.handleChange}
          />
        </form>
        <div>
          <Button variant="primary" onClick={this.props.nextSentence}>
            Next Sentence
          </Button>
        </div>
      </div>
    );
  }
}

export default SentenceInput;
