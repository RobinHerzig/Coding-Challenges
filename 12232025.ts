// Longest common subsequence. (Dynamic programming)

function longestCommonSubsequence(str1: string, str2: string): number {
  const dp = Array.from({ length: str1.length + 1 }, () => new Array(str2.length + 1).fill(0));

  // Step 1: Iterate each character.
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      // Step 2: If characters match, copy diagonal value + 1.
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        continue;
      }

      // Step 3: Else, copy larger of the adjacent values.
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
