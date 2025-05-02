// Longest substring without repeating characters. (Sliding window)

function lengthOfLongestSubstring(str: string): number {
  const charMap = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Step 1: Cache right pointer value.
    charMap.set(str[right], (charMap.get(str[right]) || 0) + 1);

    // Step 2: Verify condition of window.
    while (charMap.get(str[right])! > 1) {
      charMap.set(str[left], (charMap.get(str[left]) || 1) - 1);
      left++;
    }

    // Step 3: Cache result.
    maxLength = Math.max(maxLength, right - left + 1);

    // Step 4: Increment right pointer.
    right++;
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"), 3);
console.log(lengthOfLongestSubstring("bbbbb"), 1);
console.log(lengthOfLongestSubstring("pwwkew"), 3);
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// str: string. 0 <= str.length <= 5*10^4. English letters, digits, symbols, and spaces.
// Return the length of the longest substring without duplicate characters.
