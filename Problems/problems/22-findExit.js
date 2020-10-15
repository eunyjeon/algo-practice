/* Question Prompt (1 of 1)
Problem Statement
We have a two-dimensional board game involving snakes. The board has two types of squares on it: +’s represent impassable squares where snakes cannot go, and 0’s represent squares through which snakes can move.

Snakes may move in any of four directions - up, down, left, or right - one square at a time, but they will never return to a square that they’ve already visited. If a snake enters the board on an edge square, we want to catch it at a different exit square on the board’s edge.

The snake is familiar with the board and will take the route to the nearest reachable exit, in terms of the number of squares it has to move through to get there.

Write a function that takes a rectangular board with only +’s and 0’s, along with a starting point on the edge of the board (given row first, then column), and returns the coordinates of the nearest exit to which it can travel.

If multiple exits are equally close, give the one with the lowest numerical value for the row. If there is still a tie, give the one of those with the lowest numerical value for the column.

If there is no answer, output -1 -1

The board will be non-empty and rectangular. All values in the board will be either + or 0. All coordinates (input and output) are zero-based. All start positions will be 0, and be on the edge of the board. For example, (0,0) would be the top left corner of any size input.

Example Input
Consider the following board:

  +  +  +  +  +  +  +  0  0
  +  +  0  0  0  0  0  +  +
  0  0  0  0  0  +  +  0  +
  +  +  0  +  +  +  +  0  0
  +  +  0  0  0  0  0  0  +
  +  +  0  +  +  0  +  0  +
If a snake starts at the edge on the left (row 2 column 0), the snake will take the following path to another edge square (an exit)

         +  +  +  +  +  +  +  0  0
         +  +  0  0  0  0  0  +  +
start ->[0][0][0] 0  0  +  +  0  +
         +  + [0] +  +  +  +  0  0
         +  + [0] 0  0  0  0  0  +
         +  + [0] +  +  0  +  0  +
          end  ^
If the snake starts where the last one ended (row 5 column 2), the snake has two paths of length 5:

  +  +  +  +  +  +  +  0  0
  +  +  0  0  0  0  0  +  +
 [0][0][0] 0  0  +  +  0  +
  +  + [0] +  +  +  +  0  0
  +  + [0] 0  0  0  0  0  +
  +  + [0] +  +  0  +  0  +

  +  +  +  +  +  +  +  0  0
  +  +  0  0  0  0  0  +  +
  0  0  0  0  0  +  +  0  +
  +  +  0  +  +  +  +  0  0
  +  + [0][0][0][0] 0  0  +
  +  + [0] +  + [0] +  0  +
For possible exits of (2, 0) and (5, 5). Since these are the same length, we take the one with the lowest row value first, and we return (2, 0). If the row value were the same, we’d take the one with the lowest column value instead. */

// submitted - not working :(

function findExit(board, row, col) {
  if (!board.length) return [-1, -1];

  const numRows = board.length;
  const numCols = board[0].length;

  let visited = new Set();

  let q = [{ r: row, c: col, o: 0 }];

  while (q.length !== 0) {
    let curr = q.shift();
    let pos = `${curr.r}${curr.c}${curr.o}`;
    if (
      curr.r < 0 ||
      curr.c < 0 ||
      curr.r === numRows ||
      curr.c === numCols ||
      visited.has(pos)
    )
      continue;

    if (board[curr.r][curr.c] === "+") curr.o++;

    if (curr.r === numRows - 1 && curr.c === 0) return [curr.r, curr.c];

    if (curr.r === 0 && curr.c === numCols - 1) return [curr.r, curr.c];

    q.push({ r: curr.r - 1, c: curr.c, o: curr.o });
    q.push({ r: curr.r + 1, c: curr.c, o: curr.o });
    q.push({ r: curr.r, c: curr.c - 1, o: curr.o });
    q.push({ r: curr.r, c: curr.c + 1, o: curr.o });
  }
  return [-1, -1];
}

const myBoard = [
  ["+", 0, 0, "+"],
  ["+", 0, "+", "+"],
  ["+", 0, 0, "+"],
  ["+", 0, "+", "+"],
];

console.log(findExit(myBoard, 3, 1)); //0,1
console.log(findExit(myBoard, 0, 1)); //0,2


// first try using recursive helper function called search
function search(board, row, col, exit = [-1, -1], squaresToExit = 0) {
  const numRows = board.length;
  const numCols = borad[0].length;

  if (
    row < 0 ||
    col < 0 ||
    row > numRows ||
    col > numCols ||
    board[row][col] === 0
  )
    return { exit, squaresToExit };

  board[row][col] = 0;
  search(board, row - 1, col, [row - 1, exit[1]], squaresToExit + 1);
  search(board, row + 1, col, [row + 1, exit[1]], squaresToExit + 1);
  search(board, row, col - 1, [exit[0], col - 1], squaresToExit + 1);
  search(board, row, col + 1, [exit[0], col + 1], squaresToExit + 1);
}

function findExit(board, row, col) {
  if (!board.length) return [-1, -1];

  const numRows = board.length;
  const numCols = borad[0].length;

  let currentShortest = Infinity;
  let currentExit = [-1, -1];

  function search(board, row, col, exit = [-1, -1], squaresToExit = 0) {
    // base case
    if (
      row < 0 ||
      col < 0 ||
      row > numRows ||
      col > numCols ||
      board[row][col] === 0
    )
      return squaresToExit < currentShortest ? exit : [];

    squaresToExit += 1;
    board[row][col] = 0;
    search(board, row - 1, col, [row - 1, exit[1]], squaresToExit);
    search(board, row + 1, col, [row + 1, exit[1]], squaresToExit);
    search(board, row, col - 1, [exit[0], col - 1], squaresToExit);
    search(board, row, col + 1, [exit[0], col + 1], squaresToExit);
  }

  const result = search(board, row, col);
  return result === [] ? [-1, -1] : result;
}







///////////////
// Natalie's solution
// https://www.youtube.com/watch?v=KiCBXu4P-2Y

function snakePath(grid, row, col){
  //queues
  let rowQueue = [row]
  let colQueue = [col]
  //matrix to keep track of the nodes already visited
  let visited = Array(grid.length).fill([])
  for (let i = 0; i < visited.length; i++){
    visited[i] = new Array(grid[0].length).fill(false)
  }
  visited[row][col] = true

  let reachedExit = false
  let exitCoordinate = []
  let startRow = row
  let startCol = col

  // Directions
  let moveUpAndDown = [-1, +1, 0, 0]
  let moveLeftAndRight = [0, 0, +1, -1]

  while (rowQueue.length){
    let currRow = rowQueue.shift()
    let currCol = colQueue.shift()

    if(currRow === grid.length - 1 || currCol === 0 || currRow === 0 || currCol === grid[0].length - 1) {
      if(grid[currRow][currCol] === 0 && currRow !== startRow && currCol !== startCol){
        reachedExit = true
        exitCoordinate.push(currRow, currCol)
        break
      }
    }
      checkAdjacent(grid, currRow, currCol)

    }
      if (reachedExit){
        return exitCoordinate
      } else {
        return [-1, -1]
    }


  function checkAdjacent(grid, row, col){
    for (let i =0; i< moveUpAndDown.length; i++){
    let newRow = row + moveUpAndDown[i]
    let newCol = col + moveLeftAndRight[i]
    //check if new row or column is out of bounds or coordinate is not a 0
    if (newRow < 0 || newRow < 0 || newRow >= grid.length || newCol >= grid[0].length || visited[newRow][newCol] || grid[newRow][newCol] === '+'){
      continue
    }
    //process node in queue
    rowQueue.push(newRow)
    colQueue.push(newCol)
    visited[newRow][newCol] = true
    }
  }

}

  snakePath([
  ['+',  '+',  '+',  '+',  '+',  '+',  '+',  0,  0],
  ['+',  '+',  0,  0,  0,  0,  0,  '+',  '+'],
  [0,  0,  0,  0,  0,  '+',  '+',  0,  '+'],
  ['+',  '+',  0,  '+',  '+',  '+',  '+',  0,  0],
  ['+',  '+',  0,  0,  0,  0,  0,  0,  '+'],
  ['+',  '+',  0,  '+',  '+',  0,  '+',  0,  '+']
  ], 5, 2)
