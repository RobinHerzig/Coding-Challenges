// Count subarrays where each character appears at least once. (Sliding window)

function numberOfSubstrings(str: string): number {
  const cache = {
    a: 0,
    b: 0,
    c: 0,
  };

  let left: number = 0;
  let right: number = 0;
  let count: number = 0;

  // Sliding window algorithm.
  while (right < str.length) {
    // Step 1: Cache the right pointer value.
    cache[str[right]]++;

    // Step 2: Check window condition.
    while (cache["a"] > 0 && cache["b"] > 0 && cache["c"] > 0) {
      count += str.length - right;

      // Step 3: Increment left pointer.
      cache[str[left]]--;
      left++;
    }

    // Step 4: Increment right pointer.
    right++;
  }

  return count;
}

console.log(numberOfSubstrings("abcabc"), 10);
console.log(numberOfSubstrings("aaacb"), 3);
console.log(numberOfSubstrings("abc"), 1);
// https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

// str: string. 3 <= str.length <= 5*10^4. Consists of "a", "b", or "c".
// Return the number of substrings containing at least one occurance of "a", "b", and "c".
