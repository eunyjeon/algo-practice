/*
200. Number of Islands

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

e.g.,
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

e.g.,
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

// First approach: DFS
var numIslands = function (grid) {
  let count = 0;

  // DFS implemented to search and mark 1s as visited
  function visited(i, j) {
    if (
      i >= 0 &&
      i < grid.length &&
      j >= 0 &&
      j < grid[0].length &&
      grid[i][j] == 1
    ) {
      grid[i][j] = -1;
      if (i > 0) visited(i - 1, j);
      if (j + 1 < grid[0].length) visited(i, j + 1);
      if (i + 1 < grid.length) visited(i + 1, j);
      if (j > 0) visited(i, j - 1);
    }
    return;
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == 1) {
        count += 1;
        visited(r, c);
      }
    }
  }

  return count;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1

/*
O(m*n) time complexity when m is the # of rows and n is the # of columns.
o(m*n) space complexity - If a worst case, what if all cells are filled with "1"?

- Be careful about the type: "1", not 1
*/

/////////////////////////////////////////////////////////////

// Second Approach - BFS
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

var numIslands = function (grid) {
  if (grid === null || grid.length === 0) {
    return [];
  }

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        bfs([i, j], grid);
        count++;
      }
    }
  }

  return count;
};

const bfs = function (start, grid) {
  let queue = [],
    cache = [];

  queue.push(start);
  grid[start[0]][start[1]] = "0"; // mark as visited

  while (queue.length !== 0) {
    let point = queue.shift(),
      r = point[0],
      c = point[1];

    for (const [dx, dy] of directions) {
      let nRow = r + dx,
        nCol = c + dy;

      if (
        nRow < 0 ||
        nCol < 0 ||
        nRow >= grid.length ||
        nCol >= grid[0].length ||
        grid[nRow][nCol] === "0"
      ) {
        continue;
      }

      grid[nRow][nCol] = "0"; // mark as visited
      cache.push([nRow, nCol]);
    }

    if (queue.length === 0 && cache.length > 0) {
      queue.push(...cache);
      cache = [];
    }
  }
};
