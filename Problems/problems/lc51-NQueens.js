// FIXME: Couldn't solve yet

/*
51. N-Queens
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
(No two queens in a row, columnm, or diagonal cells.)
*/

/* ***************** */
/*
IDEA to check if a cell is safe to place a queen
 1. row
 2. column
 3. diagonal : if col = queens[i], this means i-th queen is in i-th row and col column.
 When there are two queens, c1 = queens[r1] and c2 = queens[r2],
 if Math.abs(c1 - c2) === Math.abs(r1 - r2) the two queens can attack each other.
*/

function solveNQueens(n) {
  let res = [];
  solver(0, [], n, res);
  return res;
}

// cols: an array where each index represent a row, and value represents a column in that row where we put a queen
// cols may look linke this: [1,3,0,2] which means: the 1st queen is in R0 and C1, the 2nd queen is in R1 and C3, and so on.
function solver(row, cols, n, res) {
  if (row === n) {
    let board = generateBoard(n, cols);
    res.push(board);
    return;
  }

  for (let col = 0; col < n; col++) {
    cols.push(col);
    if (isSafe(cols)) {
      solver(row + 1, cols, n, res);
    }
    // if the placement is invalid, or we have explored all the way deep
    // then we come back and undo our choice; BACKTRACK
    cols.pop();
  }
}

function generateBoard(n, cols) {
  let board = [];
  for (let r = 0; r < cols.length; r++) {
    let boardRow = [];
    for (let c = 0; c < cols.length; c++) {
      if (c === cols[r]) {
        boardRow.push("Q");
      } else {
        boardRow.push(".");
      }
    }
    board.push(boardRow.join(""));
  }
  return board;
}

// assuming I am attempting to place a Kth queen in Kth row and Ith column
function isSafe(cols) {
  let k = cols.length;
  let i = k - 1;
  for (let j = 0; j < k; j++) {
    if (cols[j] === i || Math.abs(k - j) === Math.abs(i - cols[j])) {
      return false;
    }
  }
  return true;
}

/* TEST */
console.log(solver(4));
// [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
