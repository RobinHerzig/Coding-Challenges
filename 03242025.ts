// License key formatting.

function licenseKeyFormatting(str: string, k: number): string {
  const arr: string[] = str.split("-").join("").split("").reverse();
  const result: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % k === 0 && i >= k) {
      result.push("-");
    }

    const char = arr[i];
    result.push(char.toUpperCase());
  }

  return result.reverse().join("");
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4), "5F3Z-2E9W");
console.log(licenseKeyFormatting("2-5g-3-J", 2), "2-5G-3J");
// https://leetcode.com/problems/license-key-formatting/

// str: string. 1 <= string.length <= 10^5. English letters, digits, and dashes.
// k: number. 1 <= k <= 10^4.
// Return the string after grouping the characters in lengths of k.
