/*
Time complexity of recursive functions to generate perms
*/

/*
My first attempt - using memoization
*/
function getPerm(str, res = []) {
  if (str.length === 0) return res;
  let temp = res.map((e) => [...e]);
  temp.push([]);
  temp.forEach((e) => e.push(str[0]));
  res = res.concat(temp);
  return getPerm(str.slice(1), res);
}

/* My second solution - using helper function */

function recur(str, res) {
  if (str.length === 0) return;
  let temp = JSON.parse(JSON.stringify(res));
  temp.push([]);
  for (let perm of temp) {
    perm.push(str[0]);
  }
  res.push(...temp);
  return recur(str.slice(1), res);
}

function getPerm(str) {
  let res = [];
  recur(str, res);
  return res;
}
