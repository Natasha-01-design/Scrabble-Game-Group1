import React from 'react';
import './scrabble-style.css';

function ScrabbleBoard({
  board,
  setBoard,
  selectedTile,
  setSelectedTile,
  players,
  setPlayers,
  currentPlayerIndex
}) {
  const handleCellClick = (rowIndex, colIndex) => {
    const cell = board[rowIndex][colIndex];
    if (!selectedTile || cell.tile) return;

    const newBoard = [...board];
    newBoard[rowIndex][colIndex] = {
      ...cell,
      tile: {
        letter: selectedTile.letter,
        value: selectedTile.value,
        isNew: true
      }
    };
    setBoard(newBoard);

    const updatedPlayers = [...players];
    const playerRack = [...updatedPlayers[currentPlayerIndex].rack];

    const tileIndex = playerRack.findIndex(
      t => t.letter === selectedTile.letter && t.value === selectedTile.value
    );
    if (tileIndex !== -1) {
      playerRack.splice(tileIndex, 1);
    }

    updatedPlayers[currentPlayerIndex].rack = playerRack;
    setPlayers(updatedPlayers);

    setSelectedTile(null);
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell.bonus || ''}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
          >
            {cell.tile
              ? `${cell.tile.letter} (${cell.tile.value})`
              : cell.bonus === '*' ? '★' : cell.bonus}
          </div>
        ))
      )}
    </div>
  );
}

export default ScrabbleBoard;