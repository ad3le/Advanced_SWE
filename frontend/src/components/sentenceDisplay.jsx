import axios from "axios";
import React, { useEffect } from "react";
import useFetch from "react-fetch-hook";

const API_URL = "http://localhost:8080/api/sentences/";

class SentenceDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sentences: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/sentences/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            sentences: result._embedded.sentences,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, sentences } = this.state;
    if (error) {
      return (
        <div>
          <div>{this.props.counter}</div>
          <div>Error: {error.message}</div>
        </div>
      );
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div>{sentences[this.props.counter].text} </div>
        </div>
      );
    }
  }
}

export default SentenceDisplay;
