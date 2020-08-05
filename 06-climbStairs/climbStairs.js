// Using a loop
var climbStairs = function(n) {
  let a=1, b=2, c=0

  for (let i=2; i<=n; i++) {
      c = a + b
      a = b
      b = c
  }

return a
};
//O(n) time & O(1) space


// using Tail recursion

const climbStairs1 = (n, first=1, second=2) => {
  if (n === 1) return first
  if (n === 2) return second

  return climbStairs1(n-1, second, first + second)
}
