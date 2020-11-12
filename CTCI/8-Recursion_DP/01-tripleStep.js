/*
CTCI Recursive solution - brute force / Top down approach
    - Time O(3^N) since each call branches out to 3 more calls

IDEA: tripleStep(n) = tripleStep(n-1) + tripleStep(n-2) + tripleStep(n-3)
The last hop to the target step n will be always from (n-1) OR (n-2) OR (n-3)

CAUTION:
- If a OR b OR c : a + b + c
- If a THEN b THEN c : a * b* c
*/

function tripleStep(target) {
  if (target < 0) {
    return 0;
  } else if (target === 0) {
    return 1;
  } else {
    return (
      tripleStep(target - 1) + tripleStep(target - 2) + tripleStep(target - 3)
    );
  }
}

/*
CTCI Recursive solution - Memoization / Topdown

Through memoization,I don't need to call tripleStep many times for the same value by caching the result.
Time O(N) since each call calls only 1 calls now.
*/

function tripleStep(target, memo = []) {
  if (target < 0) {
    return 0;
  } else if (target === 0) {
    return 1;
  } else if (memo[target]) {
    return memo[target];
  } else {
    memo[target] =
      tripleStep(target - 1, memo) +
      tripleStep(target - 2, memo) +
      tripleStep(target - 3, memo);
    return memo[target];
  }
}
7;

// Iterative solution
function tripleStep(target) {
  let first = 0;
  let second = 1;
  let third = 2;
  let ans = 0;

  if (target === 0) return first;
  if (target === 1) return second;
  if (target === 2) return third;

  for (let i = 3; i <= target; i++) {
    ans = first + second + third;
    first = second;
    second = third;
    third = ans;
  }
  return ans;
}

console.log(tripleStep(1), 1);
console.log(tripleStep(2), 2);
console.log(tripleStep(3), 4);
