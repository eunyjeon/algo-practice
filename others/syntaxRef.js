//********//
// STRING //
//********//

// String.repeat(times)
const chorus = "Because I'm happy. ";
console.log(`Chorus lyrics for "Happy": ${chorus.repeat(2)}`);
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. "

/*
String.charCodeAt(idx)
The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
*/
const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(
  `The character code ${sentence.charCodeAt(
    index
  )} is equal to ${sentence.charAt(index)}`
);
// expected output: "The character code 113 is equal to q"

//**************************************//
//********         LOOP         ********//
//**************************************//

// for ... of

// for ... in

//*******************************************//
//********         Functions         ********//
//*******************************************//

/*
parseInt()
parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
 */
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
