# JavaScript

## 🐙 The arguments object

- `arguments` is an Array-like object accessible inside functions that contains the values of the agruments passed to that function
- The arguments object is not an Array. It is similar, but lacks all Array properties except length.
- Only available within non-arrow functions.
- Converting to an Array

  ```js
  let args = Array.from(arguments);
  // OR
  let args = [...arguments]
  ```

- Useful for functions  clled with more arguments than they are formally declared to accept.

  ```js
  function longestString() {
    var longest = '';
    for (var i=0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    return longest;
  }
  ```

- Use `for...in` to loop through an arguments object

## 🐙 STRING

### String.repeat(times)

```js
const chorus = "Because I'm happy. ";
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(2)}`);
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. "
```

### str.charCodeAt(index)

The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

```js
const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(
  `The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`
);
// expected output: "The character code 113 is equal to q"
```

- Usage example: When counting the number of appearance of each character in a string

```js
let str = 'abcdefg'
let count = new Array(26).fill(0)

for (let i= 0; i < str.length; i++) {
  count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
}
console.log(count)
```

## ARRAY

### Array.concat()

This method does not change the existing arrays, but returns **a new array**, containing the values of the joined arrays.

### Array.every(cb)

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

### Array.reduce()

- The reduce() method reduces the array to a single value.
- The reduce() method executes a provided function for each value of the array (from left-to-right).
- The return value of the function is stored in an accumulator (result/total).

```js
var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}

numbers.reduce(getSum, 0)
```

### Array.slice()

The slice() method returns **the selected elements in an array, as a new array object**.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

### Array.splice()

The splice() method adds/removes items to/from an array, and returns **the removed item(s)**.

It modifies the original array.

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1);  // ["Apple"]
fruits;  // ["Banana", "Orange", "Mango"]
fruits.splice(2, 0, "Lemon", "Kiwi");  // []
fruits;  //  ["Banana", "Orange", "Lemon", "Kiwi", "Mango"]
```

### Array.sort()

Sort numbers in an array in ascending order:

```js
array.sort((a,b) => a - b)
```

## ⛱ LOOP

### for/of vs for/in

- for/of
  : The for...of statement creates a loop iterating over **iterable objects**, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

  ```js
  const array1 = ['a', 'b', 'c'];

  for (const element of array1) {
    console.log(element);
  }

  // expected output: "a"
  // expected output: "b"
  // expected output: "c"
  ```

- for/in
  : The for...in statement iterates over **all enumerable properties** of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

  ```js
  const object = { a: 1, b: 2, c: 3 };

  for (const property in object) {
    console.log(property);
  }
  // a
  // b
  // c

  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }

  // expected output:
  // "a: 1"
  // "b: 2"
  // "c: 3"
  ```

## 🌵 FUNCTIONS

### parseInt()

parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

```js
function roughScale(x, base) {
  const parsed = parseInt(x, base);
  if (isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// expected output: 1500

console.log(roughScale("321", 2));
// expected output: 0

// simeple examples
console.log(parseInt(1)); // 1
console.log(parseInt("a")); // NaN
```

## 🌵 MATH

### Math.pow(base, power) & Math.sqrt(num)

```js
Math.pow(5, 2) // 25
5**2 // 5 * 5
Math.sqrt(25) // 5
```

### Math.max(num1, num2, ...)

## 🌵 OBJECT

### Object.assign(target, source)

- The target object: what to apply the sources’ properties to, which is returned after it is modified.
- The source object(s): objects containing the properties you want to apply.
- The target is modified and returned.
- Properties in the target object are overwritten by properties in the sources if they have the same key.

#### Check if an ojbect

- `typeof object === 'object' && object !== null` (`null` is also an object)
  - This is incomplete though. [CHECK THIS](https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript)

#### Loop through an object

- `for (let key in myObj)`
- `for (let [key, val] of Object.entries(myObj))`
- `for (let key of Object.keys(myObj))`
- `for (let val of Object.values(myObj))`

## 🌵 SET

- Instance propecties
  - Set.size

- Instance methods
  - Set.add(val)
  - Set.clear()
  - Set.delete(val)
  - Set.has(val)
  - Iteration methods: `Set.keys()`, `Set.values()`, `Set.entries()`, `Set.forEach(cb)`

```js
let mySet = new Set()

mySet.add(1) // Set [1]
mySet.add(5) // Set [1, 5]
mySet.add(5) // Set [1, 5]
mySet.add('some text') // Set [1, 5, 'some text']

let o = {a:1, b:2}
mySet.add(o)
mySet.add({a:1, b:2}) // o is referencing a different object, so this is ok

mySet.has(1) // true
mySet.has(3) // false
mySet.has(5) // true
mySet.has(Math.sqrt(25)) // true
mySet.has('Some Text'.toLowerCase()) // true

mySet.size // 5

mySet.delete(5) // removes 5 from the set
mySet.has(5) // false
mySet.size // 4
```

## 🌵 MAP

- A `Map` object iterates its elements in insertion order — a `for...of` loop returns an array of [key, value] for each iteration.

- Properties
  - mapInstance.set(key, value)
  - mapInstance.has(key)
  - mapInstance.get(key)
  - mapInstance.delete(key)
  - mapInstance.clear() : removes all key-value pairs
  - mapInstance.size()

- Iteration methods
  - Map.keys()
  - Map.values()
  - Map.entries()
  - Map.forEach(cb)

```js
let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
```
