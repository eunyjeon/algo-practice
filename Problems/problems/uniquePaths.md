# Unique Paths problems

## lc62 - Counting Unique Paths from the top-left corner to the bottome-right coner

- Recursive approach
  - IDEA: paths to (m, n) = paths to (m-1, n) + paths to (m, n-1)
  - Not fast: too many duplicates => O(2^(m+n)) since each path has m+n steps and there are 2 choices I can make at each step. (Each call braches out to 2 more calls)

```js
function uniquePaths(m, n) {
    if (m==1 || n ==1) {
        return 1
    }
    return uniquePaths(m-1, n) + uniquePaths(m, n-1)
}
```

- DP solution : Using an array
  - IDEA: The array represent a row in the matrix. By looping over the array for the # of rows times, keep updating the values in each cell.
  - It requires O(m*n) time since I visit each cell only once.
  - It requires O(n) space for the array

```js
function uniquePaths(m, n) {
    let row = new Array(n).fill(1)

    for (let i=1; i<m; i++) {
        for (let j=1; j<n; j++) {
            row[j] = row[j-1] + row[j]
        }
    }

    return row[n-1]
}

uniquePaths(3,7) // 28
```

## le63 - Counting unique Paths with obstacles

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.

- DP Recursive approach
  - IDEA:

```js
```

- DP Iterative approach using a DP array
  - IDEA: Create an array(rowArr) to store current available paths
  - Check edge cases
  - O(r*c) time for visiting all the cells in the grid and checking if rowArr has all 0s.
  - O(c) space for rowArr DP array. This could be eliminated by using the input grid as a storage.

```js
var uniquePathsWithObstacles = function(obstacleGrid) {
    let rowNum = obstacleGrid.length
    let colNum = obstacleGrid[0].length

    let rowArr = []

    // By looping thru the first row, I will initialize the rowArr with 0 or 1, which means current available paths to the element. If there is an obstacle (1) in the first row, all the elements after that 1 will be 0 since there is no path after the obstacle.
    for (let c = 0; c < colNum; c++) {
        let cur = obstacleGrid[0][c]
        if (cur === 1 || (c >= 1 && rowArr[c-1] === 0)) {
            rowArr[c] = 0
        } else {
            rowArr[c] = 1
        }
    }

    for (let r=1; r<rowNum; r++) {
        // Check if every element in rowArr is 0, which means there exist no path to the next row. In this case, I will return 0 since there is no space to move down to the next row.
        let hasSpace = rowArr.filter(e => e !== 0).length
        if (!hasSpace) return 0

        for(let c=0; c<colNum; c++) {
            // For the first column, if the first cell on the one level above has 0 path, all the cells below that row would have 0 path.
            if (c === 0) {
                if(rowArr[0] === 1 && obstacleGrid[r][0] === 0) {
                    rowArr[0] = 1
                } else {
                    rowArr[0] = 0
                }
            } else {
                if(obstacleGrid[r][c] === 0) {
                   rowArr[c] = rowArr[c-1] + rowArr[c]
                } else {
                    rowArr[c] = 0
                }
            }
        }
    }

    return rowArr[colNum-1]
}
```

- DP approach using the input array as a DP array
  - IDEA: Utilized the same approach from the above, but to optimize the space, I used the input matrix as a DP array without using additional array.
  - O(r*c) time, but O(1) space used.

```js
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rowNum = obstacleGrid.length
    const colNum = obstacleGrid[0].length
    if (obstacleGrid[0][0] === 1 || obstacleGrid[rowNum-1][colNum-1] === 1) return 0

    for (let i=0; i<colNum; i++) {
        if(i === 0) {
            obstacleGrid[0][0] = 1
        } else if(obstacleGrid[0][i-1] === 1 && obstacleGrid[0][i] === 0) {
            obstacleGrid[0][i] = 1
        } else {
            obstacleGrid[0][i] = 0
        }
    }

    for (let i=1; i<rowNum; i++) {
        obstacleGrid[i][0] = (obstacleGrid[i-1][0] === 1 && obstacleGrid[i][0] === 0) ? 1 : 0
        for (let j=1; j<colNum; j++) {
            obstacleGrid[i][j] =
                obstacleGrid[i][j] === 0 ?
                obstacleGrid[i][j-1] + obstacleGrid[i-1][j] : 0
        }
    }

    return obstacleGrid[rowNum-1][colNum-1]
}
```

- Edge cases to cover

```js
uniquePathsWithObstacles([[1,0],[0,0]]) // 0
uniquePathsWithObstacles([[0,0],[0,1]]) // 0
uniquePathsWithObstacles([[0,0],[1,1],[0,0]]) // 0
uniquePathsWithObstacles([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1,0],[0,0],[0,0],[0,0],[0,0],[0,0],[1,0],[0,0],[0,0],[0,0],[0,0],[0,1],[0,0],[0,0],[1,0],[0,0],[0,0],[0,1],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,1],[0,0],[0,0],[0,0],[0,0],[1,0],[0,0],[0,0],[0,0],[0,0]]) // 0
```
