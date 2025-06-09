// Are the two trees the identical? (Binary tree) (Depth-first search)

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Base cases
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  // Recursive case
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// https://leetcode.com/problems/same-tree/

// p: TreeNode | null. 0 <= number of nodes <= 100. -10^4 <= Node.val <= 10^4.
// q: TreeNode | null. 0 <= number of nodes <= 100. -10^4 <= Node.val <= 10^4.
// Return true if both trees are identical structurally and by value.
