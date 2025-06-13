// Maximum diameter of binary tree. (Binary tree)

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  (function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  })(root);

  return diameter;
}

// https://leetcode.com/problems/diameter-of-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^4.-100 <= Node.val <= 100.
// Return the tree's longest length of the tree.
// - Length is the longest distance between two nodes. It may pass through the root.
