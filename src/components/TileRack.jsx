import React from 'react';

function TileRack({ player, selectedTile, setSelectedTile }) {
  return (
    <div className="tile-rack">
      <h3>{player.name}'s Tiles</h3>
      <div className="tile-row">
        {player.rack.map((tile, i) => (
          <div
            key={i}
            className={`tile ${tile === selectedTile ? 'selected' : ''}`}
            onClick={() => setSelectedTile(tile)}
          >
            <span className="letter">{tile.letter}</span>
            <span className="value">{tile.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TileRack;
