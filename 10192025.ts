// Valid parentheses. (Stack)

function isValid(str: string): boolean {
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack: string[] = [];

  for (const char of str) {
    if (char in pairs) {
      stack.push(char);
      continue;
    }

    const prev = stack.pop()!;

    if (pairs[prev] !== char) {
      return false;
    }
  }

  return true;
}

console.log(isValid("()"), true);
console.log(isValid("()[]{}"), true);
console.log(isValid("(]"), false);
console.log(isValid("([)]"), false);
// https://leetcode.com/problems/valid-parentheses/

// str: string. 1 <= str.length <= 10^4. Consists of "(", ")", "[", "[", "{", and/or "}".
// Return whether the characters are nested in a valid order.
