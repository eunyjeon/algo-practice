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




// indexOf('or', 'hello world'); // should return 7
// indexOf('hello world', 'or'); // should return -1
// indexOf('howdy', 'hello world'); // should return -1
// indexOf('oox', 'ooboxoooxo'); // should return 6
// indexOf('abc', 'abababc') // should return 4
