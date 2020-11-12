/* **************************************** */
// First attemp - working code

// my mistake 1: At first I recursively called magicIdx withought startIdx parameter. I didn't realize it will keep change the idx whenever I call the function.
// Fixed: I added startIdx parameter and kepted track of original index of each current idx.

// my mistake 2 : idx < arr[idx] vs. idx > arr[idx] -> what would be the params for this functions?

function magicIdx(arr, startIdx = 0) {
  if (arr.length === 0) return null;

  let mid = Math.floor(arr.length / 2);
  let initialIdxMid = startIdx + mid;

  if (arr[mid] === initialIdxMid) {
    return initialIdxMid;
  } else if (arr[mid] < initialIdxMid) {
    return magicIdx(arr.slice(mid + 1), initialIdxMid + 1);
  } else {
    return magicIdx(arr.slice(0, mid), startIdx);
  }
}

/* **************************************** */
// Solution from the book
// Same approach but different in keeping track of index
// Instead of keep updating the index, it uses 2 pointers for start and end
/* **************************************** */

function magicIdx(arr, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);
  if (mid === arr[mid]) {
    return mid;
  } else if (mid < arr[mid]) {
    return magicIdx(arr, start, mid - 1);
  } else {
    return magicIdx(arr, mid + 1, end);
  }
}

let array = [-10, 1, 5];
console.log(magicIdx(array)); //1

let array1 = [-10, -5, 0, 1, 2, 5, 10, 12];
console.log(magicIdx(array1)); // 5

let array2 = [0];
console.log(magicIdx(array2)); // 0

let array3 = [1, 2, 3, 4, 5];
console.log(magicIdx(array3)); // null1

/* **************************************** */
// What if values in the input array don't necessarily have to be distinct?
// Solution from the book
/* **************************************** */

function magicIdxNotDistincNums(arr, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (mid === arr[mid]) return mid;

  // magic index could be on any side of mid.
  // if arr[5] = 4, [1,1,1,1,1,4]
  let leftIdx = Math.min(mid - 1, arr[mid]);
  let left = magicIdxNotDistincNums(arr, start, leftIdx);
  if (left >= 0) return left;

  let rightIdx = Math.max(mid + 1, arr[mid]);
  let right = magicIdxNotDistincNums(arr, rightIdx, end);
  if (right >= 0) return right;
}

/* TEST */

let dupNums0 = [-1, -1, 1, 1, 1, 5, 11, 11];
console.log(magicIdxNotDistincNums(dupNums0));

let dupNums = [1, 1, 1, 1, 4, 11, 11, 11, 11, 11];
console.log(magicIdxNotDistincNums(dupNums));
