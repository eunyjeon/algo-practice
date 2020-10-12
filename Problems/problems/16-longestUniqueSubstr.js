// Finding a substring of unique characters
// Sliding window pattern

// My first approach - returning the substring
function longestUniqueSubstring(str) {
  let lookup = new Map();
  let longestSubstr = "";
  let tempSubstr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (lookup.get(char) >= 0) {
      if (tempSubstr.length > longestSubstr.length) longestSubstr = tempSubstr;

      let prevIdx = lookup.get(char);
      for (let [key, val] of lookup) {
        if (val <= prevIdx) {
          lookup.delete(key);
        }
      }
      lookup.set(char, i);
      tempSubstr = "";
      for (let key of lookup.keys()) tempSubstr += key;
    } else {
      tempSubstr += char;
      lookup.set(char, i);
    }
  }

  return longestSubstr.length > tempSubstr.length ? longestSubstr : tempSubstr;
}

function lengthOfLongestSubstring(str) {
  let longestLen = 0;
  let currentLen = 0;

  let p1 = 0;
  let p2 = 0;

  let lookup = new Set();

  while (p2 < str.length) {
    const char = str[p2];
    if (lookup.has(char)) {
      longestLen = Math.max(longestLen, currentLen);
      currentLen--;

      lookup.delete(str[p1]);
      p1++;
    } else {
      lookup.add(char);
      currentLen++;
      p2++;
    }
  }
  return Math.max(longestLen, currentLen);
}

console.log(longestUniqueSubstring("")); //''
console.log(longestUniqueSubstring("a")); //'a'
console.log(longestUniqueSubstring("abcdcefgh")); //'dcefgh'
console.log(longestUniqueSubstring("abcadefgh")); //'bcadefgh'
console.log(longestUniqueSubstring("hellothere")); //'lother'
