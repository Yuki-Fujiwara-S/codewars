function isSolved(board) {
  // Check rows
  for (let row of board) {
    if (row.every((value) => value === row[0] && value !== 0)) {
      return row[0];
    }
  }

  // Check columns
  for (let col = 0; col < board.length; col++) {
    if (
      board[0][col] === board[1][col] &&
      board[1][col] === board[2][col] &&
      board[0][col] !== 0
    ) {
      return board[0][col];
    }
  }

  // Check diagonals
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== 0
  ) {
    return board[0][0];
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== 0
  ) {
    return board[0][2];
  }

  // Check for empty spots
  for (let row of board) {
    if (row.includes(0)) {
      return -1;
    }
  }

  // No winner and no empty spots, it's a draw
  return 0;
}