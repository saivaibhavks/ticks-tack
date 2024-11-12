import { useState } from "react";
import "./style.css";
const TicTaktoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));

  const [xTurn, setXTurn] = useState(true);

  const [winner, setWinner] = useState(null);

  const clickHandler = (index) => {
    console.log("index", index);

    if (board[index] || winner) {
      return;
    }

    setBoard((prev) => {
      let temp = [...prev];
      temp[index] = xTurn ? "X" : "O";
      let res = checkWinner(temp);
      setWinner(res);
      setXTurn(!xTurn);
      return temp;
    });
  };

  const checkWinner = (board) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  return (
    <>
      <div className="container">
        {board.map((item, index) => {
          return (
            <div
              key={index}
              className="board"
              onClick={() => clickHandler(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
      {winner
        ? `winner is${winner}`
        : xTurn
        ? "Player 1 Turn"
        : "Player 2 Turn"}
    </>
  );
};

export default TicTaktoe;
