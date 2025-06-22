// Invert binary tree. (Binary tree)

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
}

// https://leetcode.com/problems/invert-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 100. -100 <= Node.val <= 100.
// Return the root of the tree after inverting it horizontally.
