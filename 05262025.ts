// Count subarrays where each character appears at least once. (Sliding window)

function numberOfSubstrings(str: string): number {
  const counts = {
    a: 0,
    b: 0,
    c: 0,
  };
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < str.length) {
    // Step 1: Cache right pointer value.
    counts[str[right]]++;

    // Step 2: Validate window condition.
    while (counts.a > 0 && counts.b > 0 && counts.c > 0) {
      result += str.length - right;

      // Step 3: Increment left pointer.
      counts[str[left]]--;
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
