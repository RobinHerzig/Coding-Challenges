// Valid parentheses. (Stack)

function isValid(str: string): boolean {
  const stack: string[] = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of str) {
    // If char is opening, add to stack.
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    // If char is closing, remove from stack.
    const prev = stack.pop()!;

    if (char !== map[prev]) {
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
