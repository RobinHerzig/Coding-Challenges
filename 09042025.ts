// Longest substring without repeating characters. (Sliding window)

function lengthOfLongestSubstring(str: string): number {
  const map = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Step 1: Cache right pointer value.
    map.set(str[right], (map.get(str[right]) || 0) + 1);

    // Step 2: Increment left pointer.
    while (map.get(str[right])! > 1) {
      map.set(str[left], map.get(str[left])! - 1);
      left++;
    }

    // Step 3: Cache current length.
    const currLength = right - left + 1;
    maxLength = Math.max(maxLength, currLength);

    // Step 4: Increment right pointer.
    right++;
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"), 3);
console.log(lengthOfLongestSubstring("bbbbb"), 1);
console.log(lengthOfLongestSubstring("pwwkew"), 3);
console.log(lengthOfLongestSubstring(""), 0);
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// str: string. 0 <= str.length <= 5*10^4. English letters, digits, symbols, and spaces.
// Return the length of the longest substring without duplicate characters.
