import "./style.css";
import { useEffect, useState } from "react";
const TicTacToePractice = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [message, setMessage] = useState("");
  const [playerName, setPlayerName] = useState(xTurn ? "X" : "O");

  const setMove = (player, index) => {
    if (boxes[index] === null) {
      let newBoxes = [...boxes];
      newBoxes[index] = player;
      setBoxes(newBoxes);

      if (checkWinner(newBoxes)) {
        setMessage(`Winner is ${playerName}`);
        return;
      }
      setXTurn(!xTurn);
    }
  };

  const checkWinner = (data) => {
    for (let winningPattern of WinningPatterns) {
      const [a, b, c] = winningPattern;

      if (data[a] && data[a] === data[b] && data[b] === data[c]) {
        return true;
      }
    }
    return false;
  };

  const WinningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 8],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  useEffect(() => {
    setPlayerName(xTurn ? "X" : "O");
  }, [xTurn]);

  return (
    <div className="layout">
      <h2> Player {playerName} Turn</h2>
      {message && <div>{message}</div>}
      <div className="board">
        {boxes.map((box, index) => {
          return (
            <div className="box" onClick={() => setMove(playerName, index)}>
              {box}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToePractice;
