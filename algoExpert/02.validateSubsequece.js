/*

Validate Subsequence

Given tow non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subwequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in a narray and the array itself are both valid subsequences of the array.

Sample Input
array = [5,1,22,25,6,-1,8,10]
sequence = [1,6,-1,10]
// true
*/

// 1st attempt
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let pos1 = 0,
    pos2 = 0;

  while (pos1 < array.length) {
    if (array[pos1] === sequence[pos2]) {
      pos1++;
      pos2++;
    } else {
      pos1++;
    }
  }

  if (pos2 === sequence.length) {
    return true;
  } else {
    return false;
  }
} // O(n) time | O(1) space

// solution 1
function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < array.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }

  return seqIdx === sequence.length;
} // O(n) time | O(1) space

// solution 2
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }

  return seqIdx === sequence.length;
} // O(n) time | O(1) space
