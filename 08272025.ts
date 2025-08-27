// Generate all valid combinations of parentheses. (Stack) (Depth-first search)

function generateParenthesis(num: number): string[] {
  const result: string[] = [];

  (function dfs(set: string, open: number, close: number): void {
    // Base case.

    // open === num
    if (set.length === num * 2) {
      result.push(set);
      return undefined;
    }

    // Recursive case.

    if (open < num) {
      dfs(set + "(", open + 1, close);
    }

    if (close < num && open > close) {
      dfs(set + ")", open, close + 1);
    }
  })("(", 1, 0);

  return result;
}

console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(generateParenthesis(1), ["()"]);
// https://leetcode.com/problems/generate-parentheses/

// num: number. 1 <= num <= 8.
// Return an array of all valid parentheses using num pairs in any order.
