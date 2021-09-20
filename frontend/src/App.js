import "./App.css";
import Exercise from "./components/excercise";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Dictation Game</h1>
      </header>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exercise">Start Game</Link>
              </li>
              <li>
                <Link to="/highscores">Highscores</Link>
              </li>
            </ul>
          </nav>

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

function Home() {
  return <h2>Home</h2>;
}

function Highscores() {
  return <h2>Highscores</h2>;
}

export default App;
