/*
commonStr

Given 2 arrays of strings, return an array of all the strings they both have in common.
 */

function commonStr(arr1, arr2) {
  let lookup = new Set();

  arr1.forEach((elem) => lookup.add(elem));
  return arr2.filter((elem) => lookup.has(elem)).join(",");
}

console.log(commonStr([], []));
console.log(commonStr([], ["a"]));
console.log(commonStr(["b", "abc"], ["abc"]));

/*
firstIdx

Given an array and a number, return the first index that number shows up in the array.
 */

function firstIdx(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(firstIdx([], 1));
console.log(firstIdx([5, 4, 3, 2, 1], 1));
console.log(firstIdx([1, 1, 1], 1));
