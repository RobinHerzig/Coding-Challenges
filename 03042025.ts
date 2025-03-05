// Determine whether a string of parenthese, brackets, and curlies is valid.

function isValid(str: string): boolean {
  const stack: string[] = [];

  for (const char of str) {
      if (char === '(' || char === '{' || char === '[') {
          stack.push(char);
          continue;
      }

      const pop = stack.pop();

      if (char === ')' && pop !== '(') {
          return false;
      }

      if (char === '}' && pop !== '{') {
          return false;
      }

      if (char === ']' && pop !== '[') {
          return false;
      }
  }

  return stack.length === 0;
};

console.log(isValid("()"), true);
console.log(isValid("()[]{}"), true);
console.log(isValid("(]"), false);
console.log(isValid("([])"), true);
console.log(isValid("([)]"), false);

// str: string. 1 <= str.length <= 10^4. Consists of chars '()[]{}'.
// Return whether the input is valid.