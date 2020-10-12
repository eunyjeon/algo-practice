/*
flatten

Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

function flatten(arr) {
  let flattened;

  function helper(arr) {
    arr.forEach((e) => {
      if (typeof e !== "object") {
        flattened.push(e);
        return;
      } else {
        return helper(e);
      }
    });
  }
  return flattened;
}
