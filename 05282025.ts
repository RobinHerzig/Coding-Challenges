// Valid parentheses. (Stack)

function isValid(str: string): boolean {
  const ref = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const stack: string[] = [];

  for (const char of str) {
    // Char is opening character.
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
      continue;
    }

    // Char is closing character.
    const prev = stack.pop();

    if (prev !== ref[char]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"), true);
console.log(isValid("()[]{}"), true);
console.log(isValid("(]"), false);
console.log(isValid("([)]"), false);
// https://leetcode.com/problems/valid-parentheses/

// str: string. 1 <= str.length <= 10^4. Consists of "(", ")", "[", "[", "{", and/or "}".
// Return whether the characters are nested in a valid order.
