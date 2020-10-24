// Candy Crush
// https://leetcode.com/discuss/interview-question/380650/Bloomberg-or-Phone-Screen-or-Candy-Crush-1D

const candyCrush = function (str) {
  let chars = []; // {key: str[i], occurance: 1}

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (chars.length === 0) {
      chars.push({ key: char, occurance: 1 });
    } else {
      if (chars[chars.length - 1].key === char) {
        chars[chars.length - 1].occurance++;
      } else {
        // not empty && char != last
        if (chars[chars.length - 1].occurance >= 3) chars.pop();

        if (chars.length === 0 || char !== chars[chars.length - 1].key) {
          chars.push({ key: char, occurance: 1 });
        } else {
          chars[chars.length - 1].occurance++;
        }
      }
    }
  }

  if (chars.length !== 0 && chars[chars.length - 1].occurance >= 3) chars.pop();

  let res = "";
  for (let j = 0; j < chars.length; j++) {
    for (let i = 0; i < chars[j].occurance; i++) {
      res += chars[j].key;
    }
  }

  return res;
};

console.log(candyCrush("aabbbacd")); // "cd"
console.log(candyCrush("aaabbbc")); // "c"
console.log(candyCrush("aabbbacd")); // "cd"
console.log(candyCrush("aabbccddeeeedcba")); // ""
