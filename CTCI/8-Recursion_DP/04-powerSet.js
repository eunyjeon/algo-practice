/* *********************** */
// There are 2^n subsets since each element have 2 choices: in vs. not in a subset
// The total number of elements across all of the subsets is n * 2 ^ (n-1): each of the n elements will b contained in half of the subsets (which 2 ^ (n-1) subsets)
/* *********************** */
// TODO: Time && space O(n * 2^n) at least because of ⬆
/* *********************** */

/* *********************** */
// My second attempt - Top down DP approach && BETTER!!
/* *********************** */

const powerSet = function (set, subSets = [[]]) {
  let temp = subSets.map((e) => [...e, set[0]]);
  subSets = subSets.concat(temp);
  if (set.length > 1) {
    return powerSet(set.slice(1), subSets);
  }
  return subSets;
};

/* *********************** */
// My first attempt - Using side effect...

function powerSet(set) {
  let subSets = [[]];
  helper(set, subSets);
  return subSets;
}

function helper(set, subSets) {
  if (set.length === 0) return subSets;

  let copySubSets = JSON.parse(JSON.stringify(subSets));

  for (let ss of copySubSets) {
    ss.push(set[0]);
    subSets.push(ss);
  }

  return helper(set.slice(1), subSets);
}

console.log(powerSet(["a", "b", "c"]));

/* *********************** */
// CTCI Recursive solution - Base case and build approach
// The same idea with my approaches, but uses less space????
// Time && space O(n * 2^n)
/* *********************** */
function getSubsets(set, idx = 0) {
  let allsubsets;

  if (set.length == idx) {
    allsubsets = [[]];
  } else {
    allsubsets = getSubsets(set, idx + 1);

    let moresubsets = allsubsets.map((e) => [...e, set[idx]]);
    allsubsets = allsubsets.concat(moresubsets);
  }
  return allsubsets;
}
