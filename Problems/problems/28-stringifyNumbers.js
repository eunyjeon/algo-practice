/*
28-stringifyNumbers

This function takes in an object and finds all of the values which are numbers and converts them to strings.
*/

// MUST CHECK THIS!!!
function stringifyNumbers(obj) {
  let newObj = {};

  for (let [key, val] of Object.entries(obj)) {
    if (typeof val === "number") {
      newObj[key] = val.toString();
    } else if (typeof val === "object" && !Array.isArray(val)) {
      newObj[key] = stringifyNumbers(val);
    } else {
      newObj[key] = val;
    }
  }

  return newObj;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
