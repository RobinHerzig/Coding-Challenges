// Reverse the vowels of a string.

function reverseVowels(str: string): string {
  const vowels = new Set(["A", "E", "I", "O", "U"]);
  const arr = str.split("");
  let left = 0;
  let right = str.length - 1;

  // Two pointer algorithm
  while (left < right) {
    const leftChar = arr[left].toUpperCase();
    const rightChar = arr[right].toUpperCase();

    if (!vowels.has(leftChar)) {
      left++;
    }

    if (!vowels.has(rightChar)) {
      right--;
    }

    // When both pointers land on a vowel, swap the values
    if (vowels.has(leftChar) && vowels.has(rightChar)) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}

console.log(reverseVowels("Icecream"), "acecreIm");
console.log(reverseVowels("LeetCode"), "LeotCede");
console.log(reverseVowels("helloWORLD"), "hOlloWeRLD");
// https://leetcode.com/problems/reverse-vowels-of-a-string/

// str: string. 1 <= s.length <= 3&10^5. Printable ASCII characters only. Vowels can be uppercase and lowercase, and appear more than once.
// Return the string with the vowels reversed.
