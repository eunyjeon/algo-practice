/*
flatten

Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

function flatten(arr) {
  let flattened = [];
  function helper(elem) {
    if (typeof elem !== "object") {
      return flattened.push(elem);
    } else {
      elem.forEach((e) => helper(e));
    }
  }

  arr.forEach((e) => helper(e));
  return flattened;
}


/*
Alternative to `typeof sth`
Array.isArray(arr)
*/
