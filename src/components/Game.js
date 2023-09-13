import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [history, setHistory] = useState(Array(9).fill(null))
  const currentSqeares = history[history.length -1];

  const handlePlay = (nextSquares) => {
    setHistory([...history,nextSquares])
    setXIsNext(!xIsNext);
  }

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSqeares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>    
  );
}

export default Game;