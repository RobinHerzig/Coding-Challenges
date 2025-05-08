// Longest substring without repeating characters. (Sliding window)

function lengthOfLongestSubstring(str: string): number {
  const charMap = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Step 1: Cache right pointer value.
    charMap.set(str[right], (charMap.get(str[right]) || 0) + 1);

    // Step 2: Validate window conditions.
    if (charMap.get(str[right]) === 1) {
      maxLength = Math.max(maxLength, right - left + 1);
    }

    // Step 3: Increment left pointer.
    while (charMap.get(str[right]) > 1) {
      charMap.set(str[left], (charMap.get(str[left]) || 0) - 1);
      left++;
    }

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
