// my first approach using recursion
// it works without p
const path = (m, n, p=0) => {
  if (m === 1 || n === 1) {
    return 1
  } else {
    return path(m-1, n, p+1) + path(m, n-1, p+1)
  }
}
// Time Complexity: 2^n


// possible paths to reach each cell from the left top
// 1  1  1  1
// 1  2  3  4
// 1  3  6  10
// 1  4  10 20


// my second approach
/*
const path1 = (m, n, p=0) => {
  if (m === 1 || n === 1) {
    return p+1
  }

  if (m > 1) {
    return path1(m-1, n, p + ??)   // what should I add?
  }

  if (n > 1) {
    return path1(m, n-1, p + ??)
  }
}
*/



// solution 1 - using Backtracking
function uniquePaths(width, height, steps = [[0, 0]], uniqueSteps = 0) {
  // Fetch current position on board.
  const currentPos = steps[steps.length - 1];

  // Check if we've reached the end.
  if (currentPos[0] === width - 1 && currentPos[1] === height - 1) {
    // In case if we've reached the end let's increase total
    // number of unique steps.
    return uniqueSteps + 1;
  }

  // Let's calculate how many unique path we will have
  // by going right and by going down.
  let rightUniqueSteps = 0;
  let downUniqueSteps = 0;

  // Do right step if possible.
  if (currentPos[0] < width - 1) {
    steps.push([
      currentPos[0] + 1,
      currentPos[1],
    ]);

    // Calculate how many unique paths we'll get by moving right.
    rightUniqueSteps = uniquePaths(width, height, steps, uniqueSteps);

    // BACKTRACK and try another move.
    steps.pop();
  }

  // Do down step if possible.
  if (currentPos[1] < height - 1) {
    steps.push([
      currentPos[0],
      currentPos[1] + 1,
    ]);

    // Calculate how many unique paths we'll get by moving down.
    downUniqueSteps = uniquePaths(width, height, steps, uniqueSteps);

    // BACKTRACK and try another move.
    steps.pop();
  }

  // Total amount of unique steps will be equal to total amount of
  // unique steps by going right plus total amount of unique steps
  // by going down.
  return rightUniqueSteps + downUniqueSteps;
}

// Time Complexity: O(2 ^ n) - roughly in worst case with square board of size n.

// Auxiliary Space Complexity: O(m + n) - since we need to store current path with positions.

