/* 1. Check if the given string has balanced parentheses

To have a string with balanced parentheses
Rule 1. There should be the same number of open parens and closing parens
Rule 2. Scanning thru the string from left to right, there should be more open parens than closing parens.
*/

const is_balanced_parentheses = function (str) {
  let balance = 0;

  for (let char of str) {
    if (char === "(") {
      balance += 1;
    } else if (char === ")") {
      balance -= 1;
    }

    if (balance < 0) return false;
  }
  return balance === 0;
};
