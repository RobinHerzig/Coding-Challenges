// Permutation in str2. (Sliding window)

function checkInclusion(str1: string, str2: string): boolean {
  const chars = new Map<string, number>(); // {char: count}
  let left = 0;
  let right = 0;

  // Step 1: Populate map with str1 values.
  [...str1].forEach((char) => chars.set(char, (chars.get(char) || 0) + 1));

  while (right < str2.length) {
    // Step 2: Decrement right-pointer value.
    chars.set(str2[right], (chars.get(str2[right]) || 0) - 1);

    if (chars.get(str2[right]) === 0) {
      chars.delete(str2[right]);
    }

    // Step 3: Increment left-pointer.
    if (right - left + 1 > str1.length) {
      chars.set(str2[left], (chars.get(str2[left]) || 0) + 1);

      if (chars.get(str2[left]) === 0) {
        chars.delete(str2[left]);
      }

      left++;
    }

    // Step 4: Check the window condition.
    if (chars.size === 0) {
      return true;
    }

    // Step 5: Increment right-pointer.
    right++;
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"), true);
console.log(checkInclusion("ab", "eidboaoo"), false);
console.log(checkInclusion("bc", "abcd"), true);
console.log(checkInclusion("cb", "abcd"), true);
console.log(checkInclusion("bd", "abcd"), false);
// https://leetcode.com/problems/permutation-in-string/

// str1: string. 1 <= str1.length <= 10^4. Lower English letters.
// str2: string. 1 <= str2.length <= 10^4. Lower English letters.
// Return true if str2 contains a permutation of str1.
