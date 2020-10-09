function mergeSort(unsortedArr) {
  if (unsortedArr.length <= 1) {
    return unsortedArr;
  }

  const midPoint = Math.floor(unsortedArr.length / 2);

  const left = unsortedArr.slice(0, midPoint);
  const right = unsortedArr.slice(midPoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let sortedArr = [],
    lIdx = 0,
    rIdx = 0;

  while (lIdx < arr1.length && rIdx < arr2.length) {
    if (arr1[lIdx] < arr2[rIdx]) {
      sortedArr.push(arr1[lIdx]);
      lIdx++;
    } else {
      sortedArr.push(arr2[rIdx]);
      rIdx++;
    }
  }
  //  return sortedArr.concat(arr1.slice(lIdx)).concat(arr2.slice(rIdx))
  return [...sortedArr, ...arr1.slice(lIdx), ...arr2.slice(rIdx)];
}

console.log(mergeSort([4, 3, 6, 1, 9, 8, 2]));
