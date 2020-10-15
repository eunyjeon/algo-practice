/*
longestArithmeticProgression

Given a set of numbers, find the Length of the Longest Arithmetic Progression (LLAP) in it.

Examples:

set[] = {1, 7, 10, 15, 27, 29}
output = 3
The longest arithmetic progression is {1, 15, 29}

set[] = {5, 10, 15, 20, 25, 30}
output = 6
 */

function longestArithmeticProgression(nums) {
  // finding a pattern
  //
}

const mySet1 = new Set([1, 7, 10, 15, 27, 29]);
console.log(longestArithmeticProgression(mySet1)); // 3

const mySet2 = new Set([5, 10, 15, 20, 25, 30]);
console.log(longestArithmeticProgression(mySet1)); // 6

const mySet3 = new Set([10, 15, 20, 21, 22, 23, 24, 25, 26]);
console.log(longestArithmeticProgression(mySet1)); // 7

/*
threeAP

- AP problem but easier than above
- Given a sorted set, find if there exist three elements in Arithmetic Progression or not
*/

const threeAP = (aSet) => {
  for (let j = 1; j < aSet.size - 1; j++) {
    let arr = Array.from(aSet);
    let i = j - 1;
    let k = j + 1;
    while (i >= 0 && k <= aSet.size - 1) {
      if (arr[i] + arr[k] == 2 * arr[j]) {
        return true;
      }
      arr[i] + arr[k] < 2 * arr[j] ? k++ : i--;
    }
  }
  return false;
};

console.log(threeAP(mySet1)); // true for [1, 15, 29]

/*
DP problems */
