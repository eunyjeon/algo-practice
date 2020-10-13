/*
29-collectStrings

This accepts an object and returns an array of all the values in the object that have a typeof string.
 */

// Approach 1
function collectStrings(obj) {
  let collector = [];

  function helper(prop) {
    // check the type of prop
    // string -> push into collector
    // object -> helper() for each value of prop
    // other -> continue

    if (typeof prop == "string") {
      return collector.push(prop);
    } else if (typeof prop === "object" && prop !== null) {
      for (let val of Object.values(prop)) helper(val);
    } else {
      return;
    }
  }

  for (let val of Object.values(obj)) {
    helper(val);
  }

  return collector;
}

// Approach 2
// Cleaner syntax
// *** check where the return is in collector function ***
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

// 3. Pure recursion
// Hmm Space complexity.....
function collectStrings(obj, memo = []) {
  for (let [key, val] of Object.entries(obj)) {
    if (typeof val === "string") {
      memo.push(val);
    } else if (typeof val === "object") {
      memo = memo.concat(collectStrings(val));
    }
  }
  return memo;
}

// the same as above
function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
