// Count subarrays where each character appears at least once. (Sliding window)

function numberOfSubstrings(str: string): number {
  const map = new Map<string, number>();
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < str.length) {
    // Step 1: Cache the right pointer value.
    map.set(str[right], (map.get(str[right]) || 0) + 1);

    // Step 2: Validate condition of window.
    while (map.get("a") > 0 && map.get("b") > 0 && map.get("c") > 0) {
      result += str.length - right;

      // Step 3: Increment left pointer.
      map.set(str[left], (map.get(str[left]) || 1) - 1);
      left++;
    }

    // Step 4: Increment right pointer.
    right++;
  }

  return result;
}

console.log(numberOfSubstrings("abcabc"), 10);
console.log(numberOfSubstrings("aaacb"), 3);
console.log(numberOfSubstrings("abc"), 1);
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// str: string. 3 <= str.length <= 5*10^4. Consists of "a", "b", or "c".
// Return the number of substrings containing at least one occurance of "a", "b", and "c".
