// Generate all valid combinations of parentheses. (Stack)

function generateParenthesis(num: number): string[] {
  const result = [];

  (function bfs(set: string, open: number, close: number): void {
    // Base case: Push parentheses into the result array.
    if (set.length >= num * 2) {
      result.push(set);
      return undefined;
    }

    // Recursive case: Add opening parentheses.
    if (open < num) {
      bfs(set + "(", open + 1, close);
    }

    // Recursive case: Add closing parentheses.
    if (close < num && open > close) {
      bfs(set + ")", open, close + 1);
    }
  })("(", 1, 0);

  return result;
}

console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(generateParenthesis(1), ["()"]);
// https://leetcode.com/problems/generate-parentheses/

// num: number. 1 <= num <= 8.
// Return an array of all valid parentheses using num pairs in any order.
