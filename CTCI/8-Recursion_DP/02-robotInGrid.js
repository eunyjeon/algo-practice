/* ************************** */
// Solution from the book
// IDEA: The only way to move to spot (r,c) is by moving to to (r-1,c) or (r, c-1).
// If you want to return bool -> finder is enough
// Time O(2^(r+c)) since each path has r+c steps and there are 2 choices I can make at each step
// Currently visits the same cell multiple times -> cache it!

function finder(maze, row, col, path) {
  if (row < 0 || col < 0 || !maze[row][col]) return false;
  const isAtOrigin = row === 0 && col === 0;

  if (
    isAtOrigin ||
    finder(maze, row - 1, col, path) ||
    finder(maze, row, col - 1, path)
  ) {
    path.push([row, col]);
    return true;
  }
  return false;
}

function getPath(maze) {
  if (maze === null || maze.length === 0) return null;
  let path = [];
  if (finder(maze, maze.length - 1, maze[0].length - 1, path)) return path;
  return false;
}

/* ************************** */
// Solution from the book - optimized by caching previously computed results
// By caching them, time complexity became O(row*col) since I remember which cells I already visited.

function finder(maze, row, col, path, cache) {
  if (row < 0 || col < 0 || !maze[row][col]) return false;

  let p = [row, col];
  if (cache.has(p)) return cache.get(p);

  const isAtOrigin = row === 0 && col === 0;
  let success = false;

  if (
    isAtOrigin ||
    finder(maze, row - 1, col, path, cache) ||
    finder(maze, row, col - 1, path, cache)
  ) {
    path.push(p);
    success = true;
  }
  cache.set(p, success);
  return success;
}

function getPath(maze) {
  if (maze === null || maze.length === 0) return null;
  let path = [];
  const cache = new Map();
  if (finder(maze, maze.length - 1, maze[0].length - 1, path, cache)) {
    return path;
  }
  return false;
}

/* ************************************************************************ */
/* ************************** */
// My First attempt - Failed / Not good
// I can see the memo array is filled with values when console logged, but it doesn't return memo array.
// getPath function returns undefined... hmmmm... why????? :(

const getPath = function (grid) {
  function finder(r, c, memo = []) {
    let rows = grid.length;
    let cols = grid[0].length;

    if (r == rows - 1 && c == cols - 1) {
      memo.push([r, c]);
      return memo;
    }
    // console.log(memo)

    if (r < rows && c < cols && grid[r][c] == 1) {
      // let copy = [...memo, [r,c]]
      memo = [...memo, [r, c]];
      // console.log(memo)
      finder(r + 1, c, memo);
      finder(r, c + 1, memo);
    }
  }

  let path = finder(0, 0);

  return path;
};

/* ************************** */
// First attempt v2
// Problem in the above code: I didn't return anything in the second if block in finder
// Problem in this code: if the test it out with grid below, it returns [[0.0]...[5,5], [0.0]...[5,5], [0.0]...[5,5], [0.0]...[5,5]] why??
//
//      var grid = [
//        [1, 1, 0, 1, 1, 1],
//        [1, 0, 0, 1, 1, 1],
//        [1, 1, 0, 0, 1, 1],
//        [1, 1, 1, 1, 0, 0],
//        [1, 0, 1, 1, 0, 1],
//        [0, 1, 0, 1, 1, 1],
//      ];

function finder(r, c, matrix, memo = []) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  if (r == rows - 1 && c == cols - 1) {
    memo.push([r, c]);
    return memo;
  } else if (r >= rows || c >= cols || matrix[r][c] == 0) {
    return [];
  } else {
    let ans = [];
    let memoCopy = [...memo, [r, c]];
    let below = finder(r + 1, c, matrix, memoCopy);
    let right = finder(r, c + 1, matrix, memoCopy);
    return [...ans, ...below, ...right];
  }
}

const getPath = function (grid) {
  const path = finder(0, 0, grid);
  // console.log("path ", path);
  return path;
};

/* ************************** */
// Secont attemt - 90% works
// One problem is, it prints a coordinate that failed to reach the destination.
// I am getting :
// [
//   [ 0, 0 ], [ 0, 1 ],
//   [ 0, 2 ], [ 0, 3 ],
//   [ 1, 2 ], [ 2, 2 ],
//   [ 2, 3 ], [ 1, 0 ]
// ]
// but [1, 0] shouldn't be included.

const getPath = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let paths = [];

  function finder(r, c) {
    if (r >= rows || c >= cols || grid[r][c] == 0) return;

    if (r == rows - 1 && c == cols - 1 && grid[r][c] == 1) {
      paths.push([r, c]);
      return;
    }
    paths.push([r, c]);
    finder(r, c + 1);
    finder(r + 1, c);
  }

  finder(0, 0);
  return paths;
};

/* ************************** */

/* TEST */

var grid1 = [
  [1, 1, 1, 1],
  [1, 0, 1, 0],
  [0, 1, 1, 1],
];

console.log(getPath(grid1));

var grid = [
  [1, 1, 0, 1, 1, 1],
  [1, 0, 0, 1, 1, 1],
  [1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0],
  [1, 0, 1, 1, 0, 1],
  [0, 1, 0, 1, 1, 1],
];

console.log(getPath(grid));
