// Find the difference between two strings.

function findTheDifference(s: string, t: string): string {
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();

  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  for (const [char, count] of tMap) {
    if (count !== sMap.get(char)) {
      return char;
    }
  }
}

console.log(findTheDifference("abcd", "abcde"), "e");
console.log(findTheDifference("", "y"), "y");
console.log(findTheDifference("abcd", "decba"), "e");
console.log(findTheDifference("aabbccdd", "aabbcecdd"), "e");
console.log(findTheDifference("abcdee", "decebea"), "e");
// https://leetcode.com/problems/find-the-difference/

// s: string. 0 <= s.length <= 1000. Lowercase English letters.
// t: string. t.length === s.length + 1. Lowercase English letters in random order.
// Return the single character from t that does not exist in s.
