/*
27-nestedEvenSum

Return the sum of all even numbers in an object which may contain nested objects.
*/

// solution - Recursion with memoization
// get used to this!!
function nestedEvenSum(obj, sum = 0) {
  // add whatever parameters you deem necessary - good luck!

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
}

// My first solution - not clean
function nestedEvenSum(obj) {
  let sum = 0;

  function helper(prop) {
    if (typeof prop === "number" && prop % 2 === 0) {
      return (sum += prop);
    } else if (typeof prop === "object" && prop !== null) {
      for (let val of Object.values(prop)) {
        helper(val);
      }
    } else {
      return;
    }
  }

  for (let val of Object.values(obj)) {
    helper(val);
  }

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
