// Return the first palindrome from an array of strings.

function firstPalindrome(words: string[]): string {
  let palindrome = "";

  for (const word of words) {
    if (isPalindrome(word)) {
      palindrome = word;
      break;
    }
  }

  return palindrome;
}

function isPalindrome(str: string): boolean {
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

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]), "ada");
console.log(firstPalindrome(["notapalindrome", "racecar"]), "racecar");
console.log(firstPalindrome(["def", "ghi"]), "");
// https://leetcode.com/problems/find-first-palindromic-string-in-the-array

// words: string[]. 1 <= words.length <= 100. 1 <= words[i].length <= 100. words[i] consists of lowercase English letters.
// Return the first string in words that is a palindrome. If none exists, return an empty string.
