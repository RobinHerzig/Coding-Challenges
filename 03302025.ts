// Reverse String II.

function reverseStr(str: string, k: number): string {
  const split: string[] = [];
  let group: string[] = [];

  // Seperate string into chunks of k size.
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    group.push(char);

    if (group.length >= k) {
      split.push(group.join(""));
      group = [];
    }
  }

  if (group.length) {
    split.push(group.join(""));
  }

  // Reverse every other chunk.
  const result = split.map((elem, index) => {
    if (index % 2 === 0) {
      return elem.split("").reverse().join("");
    } else {
      return elem;
    }
  });

  return result.join("");
}

console.log(reverseStr("abcdefg", 2), "bacdfeg");
console.log(reverseStr("abcd", 2), "bacd");

// str: string. 1 <= str.length <= 10^4. Consists of lowercase English letters.
// k: number. 1 <= k <= 10^4.
// Reverse the first k strings for every 2k characters from the start of the string.
