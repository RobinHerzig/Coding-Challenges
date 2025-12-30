// Longest repeating character replacement. (Sliding window)

function characterReplacement(str: string, k: number): number {
  const charCounts = new Map<string, number>(); // <char, count>
  let maxCount = 0;
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Step 1: Cache right pointer value.
    charCounts.set(str[right], (charCounts.get(str[right]) || 0) + 1);
    maxCount = Math.max(maxCount, charCounts.get(str[right])!);

    // Step 2: Increment left pointer.
    while (right - left + 1 - maxCount > k) {
      charCounts.set(str[left], charCounts.get(str[left])! - 1);
      left++;
    }

    // Step 3: Check length.
    maxLength = Math.max(maxLength, right - left + 1);

    // Step 4: Increment right pointer.
    right++;
  }

  return maxLength;
}

console.log(characterReplacement("ABAB", 2), 4);
console.log(characterReplacement("AABABBA", 1), 4);
console.log(characterReplacement("ABABC", 0), 1);
console.log(characterReplacement("ABCCCA", 2), 5);
// https://leetcode.com/problems/longest-repeating-character-replacement/

// str: string. 1 <= str.length <= 10^5. Uppercase English letters.
// k: number. 0 <= k <= str.length. Number of characters that can be changed.
// Return the length of the longest substring possible changing, at most, k characters.
