// Approach: if costA-costB >0, flying to city A is more expensive. Also the lager it is, the more money requires.

// Time O(NlogN) for sorting
// Space: O(N) for storing diff
var twoCitySchedCost = function (costs) {
  let diff = [],
    sum = 0;

  for (let person of costs) {
    let diffObj = {};
    diffObj.diff = person[0] - person[1];
    diffObj.person = person;
    diff.push(diffObj);
  }

  diff.sort(function (a, b) {
    let diffA = a.diff,
      diffB = b.diff,
      res = 0;

    if (diffA > diffB) res = -1;
    if (diffB > diffA) res = 1;

    return res;
  });

  let count = 0;
  for (let i = 0; i < diff.length; i++) {
    if (count < diff.length / 2) {
      sum += diff[i].person[1];
      count++;
    } else {
      sum += diff[i].person[0];
    }
  }

  console.log(diff);
  return sum;
};
