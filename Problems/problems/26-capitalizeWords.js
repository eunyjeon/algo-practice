/*
27-capitalizeWords

Given an array of words, return a new array containing each word capitalized.

- practice the 2nd solution
 */

// 1st approach
function capitalizeWords(arr, newArr = []) {
  // add whatever parameters you deem necessary - good luck!

  if (arr.length === 0) return newArr;

  return capitalizeWords(arr.slice(1), [...newArr, arr[0].toUpperCase()]);
}

// 2nd
// practice this!
function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
