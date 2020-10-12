/*
deepestNestedStr
Given a string that includes parentheses (ex: ‘a(abc(ab))b(abc(ba(cba))a)’) return the substring in the deepest nested parentheses. You can assume the parens are balanced. So example above should return ‘cba’
 */

// What if there are nested strings at the same level? e.g., 'a(b(c)(d)b)a' Should I return the one appeared earlier?

function deepestNestedStr(str) {
  let p1 = 0;
  let p2 = 0;

  let deepestLevel = -Infinity;
  let currentLevel = 0;

  let deepestStr = "";
  let currentStr = "";

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];

    if (cur === "(") {
      p1 = i;
      currentLevel++;
    }
    if (cur === ")") {
      p2 = i;
    }

    if (p1 < p2 && deepestLevel < currentLevel) {
      currentStr = str.slice(p1 + 1, p2);
      deepestLevel = currentLevel;
      deepestStr = currentStr;
      currentLevel = 0;
      currentStr = "";
      p1 = p2;
    }
  }

  return deepestStr;
}

console.log(deepestNestedStr("a(bc)")); //bc
console.log(deepestNestedStr("a(bc(cd))")); //cd
console.log(deepestNestedStr("a(abc(ab))b(abc(ba(cba))a)")); //cba
