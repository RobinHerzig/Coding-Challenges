// Is the string a repeating substring pattern (string rotation)

function repeatedSubstringPattern(str: string): boolean {
  if (str.length < 2) {
    return false;
  }

  let strRotate = str;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    strRotate = strRotate.at(-1) + strRotate.slice(0, strRotate.length - 1); // String rotation

    if (str === strRotate) {
      return true;
    }
  }

  return false;
}

console.log(repeatedSubstringPattern("abab"), true);
console.log(repeatedSubstringPattern("aba"), false);
console.log(repeatedSubstringPattern("abcabcabcabc"), true);
console.log(repeatedSubstringPattern("abcabcabcabcabc"), true);
console.log(repeatedSubstringPattern("abcabcabcabcd"), false);
// https://leetcode.com/problems/repeated-substring-pattern/

// str: string. 1 <= str.length <= 10^4. Lowercase English letters.
// Return whether the string is made up of repeating substrings.
