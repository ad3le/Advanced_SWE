import React, { Component } from "react";
import SentenceDisplay from "./sentenceDisplay";
import Highscores from "./highscores";
import SentenceInput from "./sentenceInput";
import SentenceLoader from "./sentenceLoader";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: "", counter: 0 };
  }

  handleChange = (event) => {
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
        <Container className="p-3">
          <Row>
            <Col>
              <Stack gap={2} className="col-md-5 mx-auto">
                <SentenceDisplay counter={this.state.counter} />
                <SentenceInput
                  answer={this.state.answer}
                  handleChange={this.handleChange}
                  nextSentence={this.nextSentence}
                />
              </Stack>
            </Col>
          </Row>{" "}
        </Container>
      );
    }
  }
}

export default Exercise;
