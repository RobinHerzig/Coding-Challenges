// Permutation in str2. (Sliding window)

function checkInclusion(str1: string, str2: string): boolean {
  const map = new Map<string, number>(); // {character: frequency}
  let left = 0;
  let right = 0;

  // Populate frequency map.
  [...str1].forEach((char) => map.set(char, (map.get(char) || 0) + 1));

  while (right < str2.length) {
    // Step 1: Subtract right pointer value from map.
    map.set(str2[right], (map.get(str2[right]) || 0) - 1);

    if (map.get(str2[right]) === 0) {
      map.delete(str2[right]);
    }

    // Step 2: Increment left pointer value.
    if (right - left + 1 > str1.length) {
      map.set(str2[left], (map.get(str2[left]) || 0) + 1);

      if (map.get(str2[left]) === 0) {
        map.delete(str2[left]);
      }

      left++;
    }

    // Step 3: Check window condition.
    if (map.size === 0) {
      return true;
    }

    // Step 4: Increment right pointer value.
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
