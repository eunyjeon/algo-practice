/* 1249. Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
Example 4:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"
*/

// My solution using stack based on greedy approach
// Good!
// O(N) time :
// " There are 3 loops I need to analyze.
// The first loop is for initializing balanced wiht empty string filled.
// The 2nd loop iterates over the given string, and for each character,
// either does nothing or pushes its index to openStack or balanced.
// Also, it removes the last item in the openStack to add the character
// at the index into balanced. All of these jobs take O(1) time, so this overall loop is O(N).
// The 3rd loop is for joining the characters in balanced to build a string from an array.
// So this gives me O(3N), and we drop the 3 since it is a constant."

// O(N)space , where n is the length of the input string :
// "We are using a stack and string builder, each of which chould have up to n characters in them.
// So it requires up to O(n) space."

var minRemoveToMakeValid = function (s) {
  let openParen = "(",
    closeParen = ")",
    balanced = Array(s.length).fill(""), // balanced will keep characters for string building.
    openStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === openParen) {
      openStack.push(i);
    } else if (s[i] === closeParen) {
      if (openStack.length) {
        balanced[openStack.pop()] = openParen;
        balanced[i] = closeParen;
      }
    } else {
      balanced[i] = s[i];
    }
  }

  return balanced.join("");
};

// 2nd solution using a helper function
// From the 1st solution, I could notice that invalid ')' are immediately noticiable.
// Based on this observation, I could come up with a solution that is using a helper function with a balance checker.
// Firtly, the function will loop from index 0 to check if the invalid closing brackets exist and delete them if any.
// Secondly, the function will loop from index -1 of the result of the first funciton call to delete excessive '(' brackets.

// O(N) time:
// " I need to analyze "deleteInvalidParen" function and then the outside code.
// "deleteInvalidParen" processes; each character once and optionally modifies balance and adds the character
// to a string builder. Adding to the end of a string builder is O(1). As there are at most n characters to process,
// the overall cost is O(n).
// The other code makes 2 calls to "deleteInvalidParen", 2 array reversals, 1 conversion from str to array and one from string builder to string.
// Each of these operations takes O(n), so this give me an overall cost of O(n).

// O(N) space:
// "The string building requires O(n) space.
// It is impossible to do better, because the input is an immutable string, and the output must be an immutable string.
// Therefore, manipulating the string cannot be done in-place, and requires O(n) space to modify.

var minRemoveToMakeValid = function (s) {
  // helper function to delete invalid closing brackets.
  function deleteInvalidParen(arr, open, close) {
    let stringBuilder = [],
      balance = 0;

    for (let char of arr) {
      if (char === open) {
        balance++;
      } else if (char === close) {
        if (balance === 0) continue;
        balance--;
      }
      stringBuilder.push(char);
    }
    return stringBuilder;
  }

  let res = deleteInvalidParen(s.split(""), "(", ")");
  res = deleteInvalidParen(res.reverse(), ")", "(");
  return res.reverse().join("");
};
