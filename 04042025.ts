// Longest uncommon subsequence I.

function findLUSlength(a: string, b: string): number {
  return a === b ? -1 : Math.max(a.length, b.length);
}

console.log(findLUSlength("aba", "cdc"), 3);
console.log(findLUSlength("aaa", "bbb"), 3);
console.log(findLUSlength("aaa", "aaa"), -1);
console.log(findLUSlength("abcdef", "bcdef"), 6);
console.log(findLUSlength("abcdef", "x"), 6);
console.log(findLUSlength("abcdef", "a"), 6); // What even is this question.
console.log(findLUSlength("abcdef", "d"), 6);
console.log(findLUSlength("abcdef", "f"), 6);
// https://leetcode.com/problems/longest-uncommon-subsequence-i/

// a: string. 1 <= a.length <= 100. Lower-case English letters.
// b: string. 1 <= b.length <= 100. Lower-case English letters.
// Return the length of the longest uncommon subsequence between a and b, or -1 if none exists.
