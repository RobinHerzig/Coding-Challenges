// Valid palindrome after deleting one character.

function isPalidrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function validPalindrome(str: string): boolean {
  if (str.length <= 2) {
    return true;
  }

  let left = 0;
  let right = str.length - 1;
  let strA: string | null = null;
  let strB: string | null = null;
  let isValidPalidrome = false;

  while (left < right) {
    if (str[left] !== str[right]) {
      strA = str.slice(0, left) + str.slice(left + 1); // Remove left char.
      strB = str.slice(0, right) + str.slice(right + 1); // Remove right char.
      break;
    }

    right--;
    left++;
  }

  if (left >= right) {
    isValidPalidrome = true;
  }

  return isValidPalidrome || isPalidrome(strA!) || isPalidrome(strB!);
}

console.log(validPalindrome("aba"), true);
console.log(validPalindrome("abca"), true);
console.log(validPalindrome("abc"), false);
// https://leetcode.com/problems/valid-palindrome-ii/

// str: string. 1 <= str.length <= 10^5. Lowercase English letters.
// Return whether the string is a palindrome after deleting, at most, one character.
