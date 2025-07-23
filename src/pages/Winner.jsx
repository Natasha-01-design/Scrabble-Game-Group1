// src/pages/WinnerPage.jsx
import { useLocation, Link } from 'react-router-dom';
import './Winner.css';

function WinnerPage() {
  const location = useLocation();
  const { players, winner } = location.state || {};

  // Fallback when page is visited directly without state
  if (!players || !winner) {
    return (
      <div className="winner-container">
        <h1>No game data available</h1>
        <p>Please play a game to view results.</p>
        <Link to="/">
          <button className="new-game-button">Back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="winner-container">
      <div className="score-box">
        <h2>Scores</h2>
        <div className="score-row">
          <div>
            <strong>{players[0].name}</strong>
            <div className="score-value">{players[0].score}</div>
          </div>
          <div>
            <strong>{players[1].name}</strong>
            <div className="score-value">{players[1].score}</div>
          </div>
        </div>
      </div>

      <h1 className="winner-text">{winner} Wins!</h1>

      <Link to="/">
        <button className="new-game-button">New Game</button>
      </Link>
    </div>
  );
}

export default WinnerPage;
