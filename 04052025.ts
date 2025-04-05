// Longest uncommon subsequence II.

function isSubsequence(str1: string, str2: string): boolean {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < str1.length && pointer2 < str2.length) {
      const char1 = str1[pointer1];
      const char2 = str2[pointer2];

      if (char1 === char2) {
          pointer1++;
      }

      pointer2++;
  }

  return pointer1 === str1.length;
}

function findLUSlength(strs: string[]): number {
  strs.sort((a, b) => b.length - a.length);

  for (let i = 0; i < strs.length; i++) {
      let isUncommon = true;

      for (let j = 0; j < strs.length; j++) {
          if (i === j) {
              continue;
          }

          const str1 = strs[i];
          const str2 = strs[j];

          if (isSubsequence(str1, str2)) {
              isUncommon = false;
              break;
          }
      }

      if (isUncommon) {
          return strs[i].length;
      }
  }

  return -1;
}

console.log(findLUSlength(["aba", "cdc", "eae"]), 3);
console.log(findLUSlength(["aaa", "aaa", "aa"]), -1);
console.log(findLUSlength(["abcdef", "abcdef", "abcdef"]), -1);
console.log(findLUSlength(["abcdef", "abcdef", "a"]), -1);
console.log(findLUSlength(["abcdef", "abcdef", "d"]), -1);
console.log(findLUSlength(["abcdef", "abcdef", "f"]), -1);
console.log(findLUSlength(["abcdef", "abcdef", "x"]), 1);

// strs: string[]. 2 <= strs.length <= 50. 1 <= strs[i].length <= 10. Lowercase English letters.
// Return the length of the longest uncommon subsequence between the strings, or -1 if it does not exist.
