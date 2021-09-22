import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <ul>
          <li>
            <Link to="/exercise">Start Game</Link>
          </li>
          <li>
            <Link to="/highscores">Highscores</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
