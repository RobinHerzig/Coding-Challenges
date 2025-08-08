// Permutation in str2. (Sliding window)

function checkInclusion(str1: string, str2: string): boolean {
  const frequencies = new Map<string, number>(); // {char: frequency}
  let left = 0;
  let right = 0;

  // Populate map with str1 frequencies.
  [...str1].forEach((char) => frequencies.set(char, (frequencies.get(char) || 0) + 1));

  while (right < str2.length) {
    // Step 1: Decrement right pointer value.
    frequencies.set(str2[right], (frequencies.get(str2[right]) || 0) - 1);

    if (frequencies.get(str2[right]) === 0) {
      frequencies.delete(str2[right]);
    }

    // Step 2: Increment left pointer.
    if (right - left + 1 > str1.length) {
      frequencies.set(str2[left], (frequencies.get(str2[left]) || 0) + 1);

      if (frequencies.get(str2[left]) === 0) {
        frequencies.delete(str2[left]);
      }

      left++;
    }

    // Step 3: Check cache condition.
    if (frequencies.size === 0) {
      return true;
    }

    // Step 4: Increment the right pointer.
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
