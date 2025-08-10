// Maximum diameter of binary tree. (Binary tree)

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  (function dfs(root: TreeNode | null): number {
    // Base case.
    if (!root) {
      return 0;
    }

    // Recursive case.
    const left = dfs(root.left);
    const right = dfs(root.right);
    const sum = left + right;

    // Cache current diameter.
    diameter = Math.max(diameter, sum);

    // Return the larger branch.
    return Math.max(left, right) + 1;
  })(root);

  return diameter;
}

// https://leetcode.com/problems/diameter-of-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return the tree's longest length of the tree.
// - Length is the longest distance between two nodes. It may pass through the root.
