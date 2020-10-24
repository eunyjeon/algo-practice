/* lc5. Longest Palindromic substring

Given a String s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
*/

// My first attempt
// but time exceeded for "bababababababababa....bb.....abababababababab"
//  start from the center and expand to both sides
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  let LPS = s[0];

  for (let i = 1; i < s.length; i++) {
    let pal = "",
      left = -Infinity,
      right = Infinity;

    if (s[i - 1] === s[i]) {
      pal = s.slice(i - 1, i + 1);
      left = i - 2;
      right = i + 1;

      while (s[i] === s[right]) {
        pal += s[right];
        right++;
      }
    } else {
      if (s[i - 1] === s[i + 1]) {
        pal = s.slice(i - 1, i + 2);
        left = i - 2;
        right = i + 2;
      }
    }

    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        pal = s[left] + pal + s[right];
        left--;
        right++;
      } else {
        break;
      }
    }

    LPS = LPS.length < pal.length ? pal : LPS;
  }

  return LPS;
};
