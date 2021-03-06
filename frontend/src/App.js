import "./App.css";
import Exercise from "./components/excercise";
import Highscores from "./components/highscores";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Dictation Game</h1>
      </header>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/highscores">
              <Highscores />
            </Route>
            <Route path="/exercise">
              <Exercise />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
