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
<<<<<<< HEAD
            <div>{sentences[this.props.counter].text} </div>
=======
            <div>
              <div>{sentences[this.props.counter].text} </div>
            </div>
>>>>>>> 03b06c7539cd9a3551d619252ed4ebaffad668e2
          )}
        />
      </div>
    );
  }
}

export default SentenceDisplay;
