import Square from "./Square"
import "./Square.css"

export default function Board({ xIsNext,squares, onPlay}) {
  // const [xIsNext, setXIsNext] = useState(true)
  //const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    //既に値があるマスまたは勝利済みはスキップ
    if(squares[i] || calculateWinner(squares)) {
      return;
    }
    //イミュータブルに値セット
    const nextSquares = { ...squares}
    // nextSquares[i]= "X";
    //setSquares(nextSquares);
    xIsNext ? nextSquares[i] = "X": nextSquares[i] = "O";

    onPlay(nextSquares)
    //次番手を切り替え
    // xIsNext ? nextSquares[i] = "X": nextSquares[i] = "O";
    // setXIsNext((prev) => !prev)
    // console.log(xIsNext)
  }

  const winner = calculateWinner(squares);
  let status;
  winner ? status="Winner:"+winner : status="Next :" + (xIsNext? "X" : "O");


  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} setValue={() => handleClick(0)}/>
      <Square value={squares[1]} setValue={() => handleClick(1)}/>
      <Square value={squares[2]} setValue={() => handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} setValue={() => handleClick(3)}/>
      <Square value={squares[4]} setValue={() => handleClick(4)}/>
      <Square value={squares[5]} setValue={() => handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} setValue={() => handleClick(6)}/>
      <Square value={squares[7]} setValue={() => handleClick(7)}/>
      <Square value={squares[8]} setValue={() => handleClick(8)}/>
    </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}