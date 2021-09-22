import React, { Component } from "react";
import Sentence from "./sentence";
import Highscores from "./highscores";
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
        <Container className="p-3">
          <Row>
            <Col>
              <Stack gap={2} className="col-md-5 mx-auto">
                <Sentence counter={this.state.counter} />
                <form onSubmit={this.onFormSubmit}>
                  <label htmlFor="answer"></label>
                  <input
                    type="text"
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                  />
                </form>
                <div>
                  <Button variant="primary" onClick={this.nextSentence}>
                    Next Sentence
                  </Button>
                </div>
              </Stack>
            </Col>
          </Row>{" "}
        </Container>
      );
    }
  }
}

export default Exercise;
