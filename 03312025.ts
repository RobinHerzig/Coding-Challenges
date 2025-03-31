// Minimum absolute difference in binary search tree.

function getMinimumDifference(root: TreeNode | null): number {
  const values: number[] = [];

  (function dfs(node: TreeNode | null): undefined {
    if (!node) {
      return undefined;
    }

    values.push(node.val);
    dfs(node.left);
    dfs(node.right);
  })(root);

  values.sort((a, b) => a - b);
  let minDifference: number = values.at(-1)!;

  for (let i = 0; i < values.length - 1; i++) {
    const val1 = values[i];
    const val2 = values[i + 1];
    const difference = val2 - val1;
    minDifference = Math.min(minDifference, difference);
  }

  return minDifference;
}

// https://leetcode.com/problems/minimum-absolute-difference-in-bst/

// root: TreeNode | null. 2 <= number of nodes <= 10^4. 0 <= Node.val <= 10^5.
// Return the minimum absolute difference of values of any nodes of the tree.
