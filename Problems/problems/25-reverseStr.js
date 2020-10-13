/* reverseStr

: accepts a string and returns a new string in reverse.
 */

// Recursive Approach 1: Using memoization
function reverseStr(str, reversed = "") {
  if (str.length === 0) return reversed;
  return reverseStr(str.slice(1), str[0] + reversed);
}

// Recursive Approach 2
function reverseStr(str) {
  if (str.length <= 1) return str;
  return reverseStr(str.slice(1)) + str[0];
}
