# Section 4: Problem Solving Approach

## 18. Intro to Problem Solving

- Algorithm
: A process or set of steps to accomplish a certain task.

- **Problem Solving Steps**
  - Understand the Problem
  - Explore concrete examples
  - Break it down
  - Solve / Simplify
  - Look back and refactor


## 19. STEP 1: Understand the Problem
- Ask yourself or interviewer:
  1. Can I restate the problem in my own words?
  2. What are the inputs that go into the problems?
  3. What are the outputs that schold come from the solution to the problem?
  4. Can the outputs be determined from the inputs? (Do I have enough info to solve the problem?)
  5. How should I label the important pieces of data that are a part of the problem? (e.g., variables)

## 20. STEP 2: Explore Concrete Examples
- Start with simple examples
- Progress to more complex examples
  - space, upper and lower cases, int/float/str/etc.
- Explore examples with empty inputs
- Explore examples with invalid inputs
  - null, empty string, not enough args, etc.
AND
- Might inclued... User stories, unit tests, etc.

## 21. STEP 3: Break It Down
**Explicitly write out the steps I need to take** to show your though process

## 22. STEP 4: Solve or Simplify
- If your find hard time to solve, solve a simpler problem first and then tackle the one you stucked on.

## 23. STEP 5: Look Back and Refactor
For instance,

- `for` loop -> `for...of` loop (just for an aesthetic reason)
- simple `if...else` -> truthy/falsy checking (using logial OR(||))
  ```js
  if (obj[char] > 0) {
    obj[char]++
  } else {
    obj[char] = 1
  }

  // is equal to
  obj[char] = ++obj[char] || 1
  ```
- **regex -> `charCodeAt` (for better performance)**
  "Regex is good for checking values but I am not sure how efficient it is. In JS, the performance of Regex varies depending on the browser that you are in."
  ```js
  'hi'.charCodeAt(0) // 104
  'i'.charCodeAt(0) // 105
  'j'.charCodeAt(0) // 106
  ```

  ** String.charCodeAt(idx) **
  | Column1 | Column2 |
  |:--------| -------:|
  |0-9      |48 - 57  |
  |A-Z      |65 - 90  |
  |a-z      |97 - 122 |


## 24. Recap and Interview Strategies


