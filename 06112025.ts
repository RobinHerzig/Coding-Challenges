// Maximum depth of binary tree. (Binary tree) (Depth-first search)

function maxDepth(root: TreeNode | null): number {
  // Base case.
  if (!root) {
    return 0;
  }

  // Recursive case.
  const leftCount = maxDepth(root.left) + 1;
  const rightCount = maxDepth(root.right) + 1;
  const maxCount = Math.max(leftCount, rightCount);

  return maxCount;
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 10^4.-100 <= Node.val <= 100.
// Return the tree's maximum depth using a depth-first search algorithm.
