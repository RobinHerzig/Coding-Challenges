// Return the most common values from a binary search tree.

function findMode(root: TreeNode | null): number[] {
  const values = new Map<number, number>();

  (function dfs(node): undefined {
    if (!node) {
      return undefined;
    }

    values.set(node.val, (values.get(node.val) || 0) + 1);

    dfs(node.left);
    dfs(node.right);
  })(root);

  let maxValues: number[] = [];
  let maxCount = 0;

  for (const [value, count] of values) {
    if (count > maxCount) {
      maxValues = [value];
      maxCount = count;
    } else if (count === maxCount) {
      maxValues.push(value);
    }
  }

  return maxValues;
}

// https://leetcode.com/problems/find-mode-in-binary-search-tree/

// root: TreeNode | null.  1 <= number of nodes <= 104. -105 <= Node.val <= 105.
// Return an array of the most common value(s) of the binary search tree.
