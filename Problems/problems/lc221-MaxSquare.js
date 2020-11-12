/* 221. Maximal Square

Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4 */

// 1. Brute Force
// O((mn)^2) time - In worst case, we need to traverse the complete matrix for every 1
// O(1) space - No extra space used
var maximalSquare = function (matrix) {
  let size = 0;
  let tempSize = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 1) {
        tempSize = search(i, j, i + 1, j + 1, 1);
        size = Math.max(size, tempSize);
      }
    }
  }

  function search(initR, initC, row, col, count) {
    if (
      row >= matrix.length ||
      col >= matrix[0].length ||
      matrix[row][col] == 0
    )
      return count;

    let tempR = row - 1;
    let tempC = col - 1;

    while (tempR >= initR && tempC >= initC) {
      if (matrix[row][tempC] == 0 || matrix[tempR][col] == 0) return count;
      tempR--;
      tempC--;
    }

    return search(initR, initC, row + 1, col + 1, count + 1);
  }

  return size * size;
};

// 2. DP approach
/*
When an input matrix is:
[
  ["1", "0", "1", "0"],
  ["1", "0", "1", "1"],
  ["1", "0", "1", "1"],
  ["1", "1", "1", "1"],
];

I can create another array dp for storing the side size of squares up to each index in the original matrix. For instance, dp of the given input will be :
[
  ["1", "0", "1", "0"],
  ["1", "0", "1", "1"],
  ["1", "0", "1", "2"],
  ["1", "1", "1", "2"],
];


CAUTION:
I made a mistake when initializing dp. I first used Array(length).fill([]) to fill the dp with empty arrays. The problem was all the arrays had the same reference!!!!

Time O(mn)
Space O(mn) - Another matrix of same size if used for dp
 */

var maximalSquare = function (matrix) {
  let dp = Array(matrix.length);
  let maxLen = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j === 0) {
        dp[i] = [];
      }
      if (matrix[i][j] == 0) {
        dp[i][j] = 0;
      } else {
        if (i > 0 && j > 0) {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
        } else {
          dp[i][j] = 1;
        }
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }
  return maxLen * maxLen;
};

// 3. Space optimized DP approach

/*
Actually, I don't need to store all the availabls squares since I only use 3 values from dp to get dp[i][j].  --> dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;

Therefor, I don't need 2D matrix as 1D dp arra will be sufficient for this.
 */

var maximalSquare = function (matrix) {
  let dp = []; // I am goint to reuse this for each row.
  let maxLen = 0;
  let prev = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let temp = dp[j];

      if (matrix[i][j] == 1) {
        if (i > 0 && j > 0) {
          dp[j] = Math.min(dp[j - 1], temp, prev) + 1;
        } else {
          dp[j] = 1;
        }
        maxLen = Math.max(maxLen, dp[j]);
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
  }
  return maxLen * maxLen;
};
