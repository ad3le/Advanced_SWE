import React, { Component } from "react";
import SentenceLoader from "./sentenceLoader";

class SentenceDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Sentence {this.props.counter} of 10</h1>
        <SentenceLoader
          loadingUI={<div>Loading ...</div>}
          errorUI={(error) => (
            <div>An error happened loading data: {error}</div>
          )}
          successUI={(sentences) => (
            <div>{sentences[this.props.counter].text} </div>
          )}
        />
      </div>
    );
  }
}

export default SentenceDisplay;
