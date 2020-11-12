/* ********************************* */
//Bitwise Operators / Bit Minipulation
//
// TODO: Problems asking to do arithmatic operations without the signs ==> Bit Manipulation!
//
//
/* ********************************* */

/* *************** */
// 6 Operators: &, |, ^, ~, >>, <<

// 1 = 00000001
// 2 = 00000010

console.log(1 | 2); // Bitwise OR -> 00000011 === 3
console.log(1 & 2); // Bitwise AND -> 00000000 === 0
// XOR : true if one and only one input bit is true
console.log(2 ^ 4); // Bitwise XOR -> 00000110 === 6

console.log(4 << 1); // 8
console.log(4 >> 1); // 2
console.log(5 >> 1); // 2

/*
Real world usage of OR - Access control
Read, Write, Execute
00000100 => Read allowed
00000010 => write allowed
00000111 => Read, write, Execute allowed
 */

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

// Now I have no permission
let myPermission = 0;

// Changing my permission
myPermission =
  myPermission | readPermission | writePermission | executePermission;

// Checking if I have a read permission
let message = myPermission & readPermission ? "yes" : "no";

/*
Real world usage of XOR
  - flipping bits with XOR
  - When you are not sure if it's true or not, flit it to opposite value using XOR
 */

/* *************** */
// Mutiplication & Division by Left & Right Shifts

console.log(4 << 1); // 8
console.log(4 >> 1); // 2
console.log(5 >> 1); // 2

/* *************** */
// Converting num to Bitwise num
console.log((4).toString(2)); // 2 here is a base num in string => 100 returned
console.log((4555).toString(2)); // "1000111001011"

// Converting binary num to decimal
// 1. parseInt
console.log(partInt("1000111001011", 2)); // 4555
// 2. "0b" format
console.log((0b1000111001011).toString(10)); // "4555"

/* *************** */
/* *** Bit Masks *** */

/* Set Bit */
// What if you want to set n-th position to true?

function setBit(x, position) {
  let mask = 1 << position; // if position=5, mask = 00100000
  return x | mask;
}

console.log(setBit(0b00000110, 5)); // 38 (6 + 2^5)

/* Clear Bit */
function clearBit(x, position) {
  let mask = 1 << position;
  return x & ~mask;
}

console.log(clearBit(0b00000110, 2)); // 2
console.log(clearBit(0b00000110, 1)); // 4

/* Flip Bit */
function flipBit(x, position) {
  let mask = 1 << position;
  return x ^ mask;
}

console.log(flipBit1(5, 2)); // 1

/* Is Bit Set */
function isBitSet(x, position) {
  x = x >> position;
  return x & 1;
}

console.log(isBitSet(5, 3)); // 0
console.log(isBitSet(5, 2)); // 1

/* Moodify Bit - setting or clearing a bit depends on input state */
// if state = 1: setting the bit
// if state = 0: clearing the bit

function modify_bit(x, position, state) {
  let mask = 1 << position;
  return (x & ~mask) | (-state & mask);
}

// E.g., Setting a bit
console.log(modify_bit(6, 5, 1)); // 00100110
/*
            x 00000110
     position 00000101
        state 00000001
         mask 00100000

        ~mask 11011111
       ~state 11111111
    x & ~mask 00000110
~state & mask 00100000
            | 00100110 */

/* 1's compliment and 2's complement*/
// 11111111 -> -1

/* *************** */
/* *** Bit Tricks *** */

/* Check Even or Odd */
function getRemainder(num) {
  return num & 1;
}

/* Check If Power of Two */
function isPowerOfTwo(x) {
  return (x & (x - 1)) == 0;
}
/* Adding two numbers */
function addTwoNums(a, b) {
  let carry = a & b; // gives me the positions that need to carry 1 to the next position
  carry = carry << 1; // move carries to one position to the left
  // XOR opperator simulates the addition. (with & for carry)
  return carry ^ (a ^ b);
}
