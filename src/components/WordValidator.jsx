import isWordValid from "./index";

function WordValidator({
  board,
  currentPlayer,
  setPlayers,
  currentPlayerIndex,
  setCurrentPlayerIndex,
  setWordScore,
  tileBag,
  setTileBag,
  setSelectedTile,
  setTimeLeft,
  handleTurnAdvance,
  children
}) {
  const playWord = () => {
    const newTiles = [];

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        const cell = board[row][col];
        if (cell.tile?.isNew) {
          newTiles.push({ row, col, ...cell.tile, bonus: cell.bonus });
        }
      }
    }

    if (newTiles.length === 0) {
      alert("Place at least one tile before submitting a word.");
      return;
    }

    const undoPlacedTiles = () => {
      const updatedBoard = [...board];
      const returnedTiles = [];

      for (let tile of newTiles) {
        updatedBoard[tile.row][tile.col].tile = null;
        returnedTiles.push({ letter: tile.letter, value: tile.value });
      }

      setPlayers(prevPlayers => {
        const updated = [...prevPlayers];
        const rack = updated[currentPlayerIndex].rack;

        returnedTiles.forEach(t => rack.push(t));

        updated[currentPlayerIndex].rack = rack.slice(0, 7);
        return updated;
      });

      setBoard(updatedBoard);
      setSelectedTile(null);
    };

    const rows = newTiles.map(tile => tile.row);
    const cols = newTiles.map(tile => tile.col);
    const isSameRow = rows.every(r => r === rows[0]);
    const isSameCol = cols.every(c => c === cols[0]);

    if (!(isSameRow || isSameCol)) {
      alert("All tiles must be in the same row or same column.");
      undoPlacedTiles();
      return;
    }

    const isFirstMove = board.every(row => row.every(cell => !cell.tile || cell.tile?.isNew));
    if (isFirstMove) {
      const centerTile = board[7][7].tile;
      if (!centerTile || !centerTile.isNew) {
        alert("First word must cover the center tile (★ at H8).");
        undoPlacedTiles();
        return;
      }
    }

    if (!isFirstMove) {
      const isConnected = newTiles.some(({ row, col }) => {
        const neighbors = [
          board[row - 1]?.[col],
          board[row + 1]?.[col],
          board[row]?.[col - 1],
          board[row]?.[col + 1],
        ];
        return neighbors.some(n => n?.tile && !n.tile.isNew);
      });

      if (!isConnected) {
        alert("New word must connect to existing tiles.");
        undoPlacedTiles();
        return;
      }
    }

    const getWord = (row, col, isHorizontal) => {
      let word = "";
      let startRow = row;
      let startCol = col;

      while (startRow > 0 && board[startRow - (isHorizontal ? 0 : 1)]?.[startCol - (isHorizontal ? 1 : 0)]?.tile) {
        startRow -= isHorizontal ? 0 : 1;
        startCol -= isHorizontal ? 1 : 0;
      }

      let r = startRow, c = startCol;
      while (board[r]?.[c]?.tile) {
        word += board[r][c].tile.letter;
        if (isHorizontal) c++;
        else r++;
      }
      return word;
    };

    const words = [];
    const isHorizontal = isSameRow;
    const mainTile = newTiles[0];
    const mainWord = getWord(mainTile.row, mainTile.col, isHorizontal);
    if (mainWord.length > 1) words.push(mainWord);

    for (let tile of newTiles) {
      const crossWord = getWord(tile.row, tile.col, !isHorizontal);
      if (crossWord.length > 1) words.push(crossWord);
    }

    const invalid = words.find(w => !isWordValid(w));
    if (invalid) {
      alert(`"${invalid}" is not a valid word.`);
      undoPlacedTiles();
      return;
    }

    let totalScore = 0;
    let wordMultiplier = 1;

    newTiles.forEach(({ value, bonus }) => {
      if (bonus === 'DL') totalScore += value * 2;
      else if (bonus === 'TL') totalScore += value * 3;
      else totalScore += value;

      if (bonus === 'DW') wordMultiplier *= 2;
      if (bonus === 'TW') wordMultiplier *= 3;
    });

    const finalScore = totalScore * wordMultiplier;

    setPlayers(prevPlayers => {
      const updated = [...prevPlayers];
      updated[currentPlayerIndex].score += finalScore;

      for (let row of board) {
        for (let cell of row) {
          if (cell.tile?.isNew) {
            delete cell.tile.isNew;
          }
        }
      }

      const rack = updated[currentPlayerIndex].rack;
      while (rack.length < 7 && tileBag.length > 0) {
        rack.push(tileBag.pop());
      }

      updated[currentPlayerIndex].rack = rack;
      return updated;
    });

    setTileBag([...tileBag]);
    setWordScore(finalScore);
    setSelectedTile(null);
    handleTurnAdvance();
  };

  return <>{children({ playWord })}</>;
}

export default WordValidator;
