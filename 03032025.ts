// Find the index of the first occurance in a string, without using indexOf(). KMP algorithm.

function getLongestPrefixSuffixArray(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let length = 0;
  let i = 1;

  while (i < pattern.length) {
    // If there's a match, extend a prefix-suffix match.
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length; // Store the new length in the LPS array.
      i++;
      continue;
    }

    // If there's no match, but length is greater than 0.
    if (length > 0) {
      length = lps[length - 1]; // Backtrack to the previous length stored in the LPS array. Do not increment i.
      continue;
    }

    // If there's no match, and length is 0.
    lps[i] = 0;
    i++;
  }

  return lps;
}

function strStr(text, pattern) {
  const lps = getLongestPrefixSuffixArray(pattern);
  let i = 0; // Text index
  let j = 0; // Pattern index

  while (i < text.length) {
    const textChar = text[i];
    const patternChar = pattern[j];

    // If both characters from the strings match.
    if (textChar === patternChar) {
      i++;
      j++;

      // If the pattern index reaches the end of the pattern string.
      if (j === pattern.length) {
        return i - j;
      }

      continue;
    }

    if (j > 0) {
      j = lps[j - 1]; // Rollback j instead of resetting it. This makes the algorithm O(n + m), instead of O(n^2).
      continue;
    }

    i++;
  }

  return -1;
}

console.log(strStr("codingchallenge", "coding"), 0);
console.log(strStr("codingchallenge", "i"), 3);
console.log(strStr("codingchallenge", "x"), -1);
console.log(strStr("codingchallenges", "s"), 15);

// a: string. 1 <= haystack.length <= 10^4. Constsists only of lowercase English characters.
// b: string. 1 <= needle.length <= 10^4. Constsists only of lowercase English characters.
// Return the index of the fist occurance of b in a, or -1 if it doesn't exist at all.

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
