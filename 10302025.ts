// Generate all valid combinations of parentheses. (Stack)

function generateParenthesis(num: number): string[] {
  const result: string[] = [];

  (function dfs(set, open, close): void {
    // Base case: Push completed set to result.
    if (set.length === num * 2) {
      result.push(set);
      return undefined;
    }

    // Recursive cases: Add parethesis.
    if (open < num) {
      dfs(set + "(", open + 1, close); // Append open parethesis.
    }

    if (close < num && open > close) {
      dfs(set + ")", open, close + 1); // Append close parethesis.
    }
  })("(", 1, 0);

  return result;
}

console.log(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
console.log(generateParenthesis(1), ["()"]);
// https://leetcode.com/problems/generate-parentheses/

// num: number. 1 <= num <= 8.
// Return an array of all valid parentheses using num pairs in any order.
