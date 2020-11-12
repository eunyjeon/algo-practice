/*
IDEA:
n * 2 === n << 1
n / 2 === n >> 1

- Instead of using * and / operators, I used bitwise operators.
- E.g., 3 * 4 = (3 * 2) * 2 => kept dividing by 2 until it becomes 1
- For odd numbers: 3 * 5 = (3 * 4) + 3
*/

function minProduct(a, b) {
  if (a > b) [a, b] = [b, a]; // always a <= b
  return helper(a, b);
}

function helper(smaller, bigger) {
  if (smaller === 0) {
    return 0;
  } else if (smaller === 1) {
    return bigger;
  }

  let s = smaller >> 1; // Divide by 2
  let tempRes = helper(s, bigger);
  // check if s is odd or even
  if (s << 1 === smaller) {
    return tempRes + tempRes;
  } else {
    return tempRes + tempRes + bigger;
  }
}

/* TEST */
console.log(minProduct(10, 7)); // 70
console.log(minProduct(10, 1)); // 10
