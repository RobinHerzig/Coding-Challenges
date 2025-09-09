// Longest repeating character replacement. (Sliding window)

function characterReplacement(str: string, k: number): number {
  const map = new Map<string, number>();
  let maxFreq = 0;
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Step 1: Cache right pointer value.
    map.set(str[right], (map.get(str[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(str[right])!);

    // Step 2: Increment left pointer.
    if (right - left + 1 - maxFreq > k) {
      map.set(str[left], map.get(str[left])! - 1);
      left++;
    }

    // Step 3: Cache maxLength.
    const currLength = right - left + 1;
    maxLength = Math.max(maxLength, currLength);

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
