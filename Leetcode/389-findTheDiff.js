/* 389.Find the Difference
Given two strings s and t which consist of only lowercase letters.

String t is generated by random shuffling string s and then add one more letter at a random position.

Find the letter that was added in t.

 */

// var findTheDifference = function(s, t) {
//     let countS = new Map()

//     s.split('').forEach(c => countS[c] ? countS[c] += 1 : countS[c] = 1)

//     for (let c of t) {
//         (countS[c] >= 1) ? countS[c] -= 1 : countS['found'] = c
//     }

//     return countS['found']
// }

// using bit manipulation
var findTheDifference = function (s, t) {
  let sasci = 0;
  let tasci = 0;
  let sLen = s.length;

  for (let i = 0; i < s.length; i++) {
    sasci += s.charCodeAt(i);
    tasci += t.charCodeAt(i);
    console.log("sasci: ", sasci);
  }
  tasci += t.charCodeAt(s.length);

  return String.fromCharCode(tasci - sasci);
};
