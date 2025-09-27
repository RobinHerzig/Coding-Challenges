// Longest common subsequence. (Dynamic programming)

function longestCommonSubsequence(str1: string, str2: string): number {
  const dp = Array.from({ length: str1.length + 1 }, () => new Array(str2.length + 1).fill(0));

  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      const charI = str1[i - 1];
      const charJ = str2[j - 1];

      // If characters are the same, copy diagonal value + 1.
      if (charI === charJ) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        continue;
      }

      // If characters are different, copy the largest adjacent value.
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[str1.length][str2.length];
}

console.log(longestCommonSubsequence("abcde", "ace"), 3);
console.log(longestCommonSubsequence("abc", "abc"), 3);
console.log(longestCommonSubsequence("abc", "def"), 0);
// https://leetcode.com/problems/longest-common-subsequence/

// str1: string. 1 <= str1.length <= 1000. Lowercase English characters.
// str2: string. 1 <= str2.length <= 1000. Lowercase English characters.
// Return the length of the longest common subsequence.
// - A subsequence is a new string with some/no characters deleted.
// - The relative order of the remaining characters remains the same.