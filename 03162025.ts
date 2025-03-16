// Return the words that can be typed using a single row of the keyboard.

function findWords(words: string[]): string[] {
  const keyboard = [
      new Set("qwertyuiop"),
      new Set("asdfghjkl"),
      new Set("zxcvbnm")
  ];

  const result = words.filter((word) => {
    const chars = word.toLowerCase().split("");

    return keyboard.some((row) => chars.every((char) => row.has(char)));
  });

  return result;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]), ["Alaska", "Dad"]);
console.log(findWords(["omk"]), []);
console.log(findWords(["adsdf", "sfd"]), ["adsdf", "sfd"]);
// https://leetcode.com/problems/keyboard-row/

// words: string[]. 1 <= words.length <= 20. 1 <= words[i].length <= 100. Consists of uppercase and lowercase English letters.
// Return an array of strings that can be typed using only the top, middle, or bottom row of the American keyboard. Case insensitive.
