// Find the index of the first occurance in a string, without using indexOf().

function strStr(a: string, b: string): number {
  for (let i = 0; i <= a.length - b.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      let charA = a[i + j];
      let charB = b[j];

      if (charA !== charB) {
        break;
      }

      if (j === b.length - 1) {
        return i;
      }
    }
  }

  return -1;
}

console.log(strStr("codingchallenge", "coding"), 0);
console.log(strStr("codingchallenge", "c"), 6);
console.log(strStr("codingchallenge", "x"), -1);
console.log(strStr("codingchallenges", "s"), 15);

// a: string. 1 <= haystack.length <= 10^4. Constsists only of lowercase English characters.
// b: string. 1 <= needle.length <= 10^4. Constsists only of lowercase English characters.
// Return the index of the fist occurance of b in a, or -1 if it doesn't exist at all.
