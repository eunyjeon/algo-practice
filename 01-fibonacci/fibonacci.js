// finding nth fibonacci

// 1. naive solution
// My first approach
function nthFib (n) {
  if (n===1) return 0
  if (n===2) return 1
  if (n > 2) return (fibonacci(n-1) + fibonacci(n-2))
}
// O(2^n) time | O(n) space
// redundant : when we compute nthFib(5), nthFib(3) happens twice

// 2. partially optimized
function nthFib(n, memo = {1: 0, 2: 1}) {
  if(n in memo) {
    return memo[n]
  } else {
    memo[n] = nthFib(n - 1, memo) + nthFib(n - 2, memo)
    return memo[n]
  }
}
// O(n) time | O(n) space
// Potentially better time complexity as the memoization stores more sequence values.


// 3. optimized
function nthFib(n) {
  const lastTwo = [0, 1]
  let counter = 3
  while(counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib
    counter++
  }
  return n > 1 ? lastTwo[1] : lastTwo[0]
}
// O(n) time | 0(1) space


// 4. tail recursion -> use this
function tailRecursiveFib (n,  first=0, second=1) {
  if (n === 1) return first
  if (n === 2) return second

  return tailRecursiveFib(n-1, second, first + second)
}
