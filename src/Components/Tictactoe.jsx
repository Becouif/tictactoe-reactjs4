import React, { useState } from "react";
import "./Tictactoe.css";

function Tictactoe() {
  
  const [board, setBoard] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);

  // here we will try to calculate the winner 
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(input){
    const squares = [...board];
    console.log(squares.length);

    if(calculateWinner(squares) || squares[input]) {
      return;
    }


    squares[input] = xIsNext ? 'X' : 'O';
    // console.log(squares)
    setBoard(squares);
    setXIsNext(!xIsNext);
  };

// this get the winner in the code 
  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'} `;

  // this is a bracket in renderSquare not a curly braces 
  const renderSquare = (i) => (
    <button className="square" onClick={()=> handleClick(i)}>{board[i]}</button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }


  return (
    <div>
      <h1 className="title"><span className="title0">Tic</span><span className="title1">Tac</span><span className="title2">Toe</span> made with <span className="tool">React</span></h1>

      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="resetbtn" onClick={resetGame}>Reset</button>
    </div>

  )
}

export default Tictactoe;