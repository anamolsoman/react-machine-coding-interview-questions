import { useState } from "react";
const initialBoard = new Array(9).fill(null);

function useTicTacToe() {
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const WinningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const checkWinner = (currentBoard) => {
    for (let i = 0; i < WinningPattern.length; i++) {
      const [a, b, c] = WinningPattern[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const winner = checkWinner(board);
    if (winner || board[index]) return;

    let newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatus = () => {
    const winner = checkWinner(board);

    if (winner) return `Player ${winner} Wins`;
    console.log(board);
    if (!board.includes(null)) return "Match Is Draw";

    return `Player ${isXNext ? "X" : "O"} Turn`;
  };

  const reset = () => {
    setBoard(initialBoard);
  };

  return { board, isXNext, handleClick, reset, getStatus };
}

export default useTicTacToe;
