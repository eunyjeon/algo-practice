// first approach using recursion
const indexOf = (needle, haystack, pos=0) => {
  if (needle.length > haystack.length) return -1

  for (let i=0; i<needle.length; i++) {
    if (needle[i] !== haystack[i]) {
      return indexOf(needle, haystack.slice(1), pos+1)
    }

    if (i === needle.length-1) return pos
  }
}

// slice has its own complexity
// not recommended to use slice
const indexOf = (needle, haystack) => {
  const len = needle.length
  if (len > haystack.length) return -1

  for (let i=0; i<haystack.length-len; i++){
    if (needle[0]===haystack[i]) {
      let newHaystack = haystack.slice(i, i+len)
      console.log(newHaystack)
      if (needle === newHaystack) return i
    }
  }

  return -1
}

// Boyer-Moore


// indexOf('or', 'hello world'); // should return 7
// indexOf('hello world', 'or'); // should return -1
// indexOf('howdy', 'hello world'); // should return -1
// indexOf('oox', 'ooboxoooxo'); // should return 6
// indexOf('abc', 'abababc') // should return 4
