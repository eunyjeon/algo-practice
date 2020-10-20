# Dynamic Programming

- observations - recursive solution - optimization with iterative solution to reduce the time complexity
- "한번 푼 문제는 다시 풀지 않는다."

## Dynamic Programming vs Greedy Algorithms

- Purpose: Both are useful for solving optimization problems.
  - Optimization problems: Problems require either max or min result.

- Greedy Algo
  - We try to **follow predefined procedures** to get optimal result
  - The procedure is known to be optimal so we follows the procedure to get the best result.
  - Examples
    - Kruskal's minimum spanning tree : Always select the min cost edge, that gives us the best result
    - Dijkstra shortest path algorithm: Always select the shortest path vertex and continue relax the vertices

- DP
  - We will try to **find out all possible solutions and then pick up the best** solution.
  - Compared to Greedy Method, DP is time consuming
  - Often solved by recursive formulas (Though, we will not use a recursion of programmng, but the formulas are recursive. using iteration.)

- DP follows the ***Priciple of Optimality***
  - Principle of Opimality says that a problem can be solved by taking **a sequence of decisions** to get the optimal solution.
  - Making decisions
    - In greedy mothods, decision is taken one time that "We will do it like this" and we will follow that procedure.
    - **In DP, we make a decision in every stage.**

## Methods: Memoization and Tabulation(Creating a table)

### Memoization

- **Recursive formulas**
- e.g., Fibonacci function using Memoization
  - We are storing each return value of fib function calls in somewhere/lookup table and look up the value from the table if a function already called before is invoked again.
- Memoization follows **Top-down approach** (Picture a tree. For fib(5), fib(5) is at the root node and the tree grows towards the bottom/smaller values. )
  - fib(5) -> fib(4) -> ...

### Tabulation

- **Iterative method**
- e.g., Fibonacci function using Tabulation
  - Set two cells first with `F[0]=0` and `F[1]=1`, and fill other cells summing previous two values.
- We are mostly using Tabulation over Memoization
- Tabulation follows **bottom-up approach** cuz it fills smaller values first. (e.g, For the fibnacci, we start from 0 and 1 to get the fib(5))
  - fib(0) -> fib(1) -> ...

## String Permutations (using recursion)

Write a recursive function for generating all permutations of an input string without duplicate characters. Return them as a set.

- Not efficient

```js
  function getPermutations(string) {

  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
}
```
