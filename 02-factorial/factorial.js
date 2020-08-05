//factoral with Recursion
function factorial (n) {
  if (0 === 1) {
    return 1
  } else {
    return n * factorial(n-1)
  }
}
/*
Not efficient in terms of memory usage.
We need to unwind, or apply, all the recursion before we can actually get to
the point where we do any of the muliplications.
We start off of the small term (e.g., factorial(4))
to the larger one (e.g., 4 * (3 * factorial(2))),
and then shrink down to 24.
*/



// factorial with Tail Recursion
function tailFactorial (n, num=1) {
  if (n === 0) return num

  return tailFactorial(n-1, num*n)
}
// 0(n) time | O(1) space


/*
Recursion
  - We need to remember that we still need to do the multiply.

Tail recursion
  - The last thing that we do is applying the recursive difinition.
*/
