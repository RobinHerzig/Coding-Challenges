// Valid parentheses. (Stack)

function isValid(str: string): boolean {
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack: string[] = [];

  for (const char of str) {
    // Opening char
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    // Closing char
    const prev = stack.pop();

    if (map[prev] !== char) {
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
