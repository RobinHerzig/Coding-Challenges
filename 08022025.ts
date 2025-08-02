// Generate all valid combinations of parentheses. (Stack)

function generateParenthesis(num: number): string[] {
  const result: string[] = [];

  (function recursion(set: string): void {
    // Base case.
    if (set.length === num * 2) {
      result.push(set);
      return undefined;
    }

    // Recursive case.
    const openCount = set.match(/\(/g)?.length || 0;
    const closeCount = set.length - openCount;
    const canTakeOpen = openCount < num;
    const canTakeClose = closeCount < num && openCount > closeCount;

    if (canTakeOpen) {
      recursion(set + "(");
    }

    if (canTakeClose) {
      recursion(set + ")");
    }
  })("");

  return result;
}

console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(generateParenthesis(1), ["()"]);
// https://leetcode.com/problems/generate-parentheses/

// num: number. 1 <= num <= 8.
// Return an array of all valid parentheses using num pairs in any order.
