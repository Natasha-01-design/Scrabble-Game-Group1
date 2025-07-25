import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrabbleBoard from '../components/ScrabbleBoard';
import TileRack from '../components/TileRack';
import WordValidator from '../components/WordValidator';
import generateBag from '../components/TileBag';
import '../components/scrabble-style.css';

const BONUS_TEMPLATE = [
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["TW", "", "", "DL", "", "", "", "*", "", "", "", "DL", "", "", "TW"],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"]
];

const generateEmptyBoard = () => {
  return BONUS_TEMPLATE.map(row =>
    row.map(bonus => ({ tile: null, bonus: bonus || null }))
  );
};

const initialPlayers = [
  { name: 'User1', score: 0, rack: [] },
  { name: 'User2', score: 0, rack: [] }
];

function Game() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [turnCounts, setTurnCounts] = useState([0, 0]);
  const [board, setBoard] = useState(generateEmptyBoard());
  const [tileBag, setTileBag] = useState(generateBag());
  const [wordScore, setWordScore] = useState(0);
  const [selectedTile, setSelectedTile] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const MAX_TURNS = 2;

  const currentPlayer = players[currentPlayerIndex];

  useEffect(() => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player => ({
        ...player,
        rack: tileBag.splice(0, 7)
      }))
    );
    setTileBag([...tileBag]);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      handlePass();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleTurnAdvance = () => {
    const newTurnCounts = [...turnCounts];
    newTurnCounts[currentPlayerIndex] += 1;

    // Check if both players have completed their 2 turns
    if (newTurnCounts[0] >= MAX_TURNS && newTurnCounts[1] >= MAX_TURNS) {
      const [p1, p2] = players;
      const winner =
        p1.score > p2.score ? p1.name :
        p2.score > p1.score ? p2.name :
        "It's a tie!";

      navigate('/winner', {
        state: { players, winner },
      });
      return;
    }

    setTurnCounts(newTurnCounts);
    setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
    setTimeLeft(60);
  };

  const handlePass = () => {
    setSelectedTile(null);
    handleTurnAdvance();
  };

  return (
    <div className="game-container">
      <div>
        <ScrabbleBoard
          board={board}
          setBoard={setBoard}
          selectedTile={selectedTile}
          setSelectedTile={setSelectedTile}
          players={players}
          setPlayers={setPlayers}
          currentPlayerIndex={currentPlayerIndex}
        />
        <TileRack
          player={currentPlayer}
          selectedTile={selectedTile}
          setSelectedTile={setSelectedTile}
        />
      </div>

      <div className="sidebar">
        <h2>{currentPlayer.name}'s Turn</h2>
        <p>Score: {currentPlayer.score}</p>
        <p>Word Score: {wordScore}</p>
        <p>Timer: {Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}</p>

        <WordValidator
          board={board}
          currentPlayer={currentPlayer}
          setPlayers={setPlayers}
          currentPlayerIndex={currentPlayerIndex}
          setCurrentPlayerIndex={setCurrentPlayerIndex}
          setWordScore={setWordScore}
          tileBag={tileBag}
          setTileBag={setTileBag}
          setSelectedTile={setSelectedTile}
          setTimeLeft={setTimeLeft}
          handleTurnAdvance={handleTurnAdvance}
        >
          {({ playWord }) => (
            <button className="play-button" onClick={playWord}>Play Word</button>
          )}
        </WordValidator>

        <button className="pass-button" onClick={handlePass}>PASS</button>
      </div>
    </div>
  );
}

export default Game;
