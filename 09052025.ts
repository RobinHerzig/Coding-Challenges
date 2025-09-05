// Are the two trees the identical? (Binary tree)

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Base case
  if (!p.node && !q.node) {
    return true;
  }

  if (!p.node || !q.node) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  // Recursive case
  const pLeft = p.left;
  const pRight = p.right;

  const qLeft = q.left;
  const qRight = q.right;

  return isSameTree(pLeft, pRight) && isSameTree(qLeft, qRight);
}

// https://leetcode.com/problems/same-tree/

// p: TreeNode | null. 0 <= number of nodes <= 100. -10^4 <= Node.val <= 10^4.
// q: TreeNode | null. 0 <= number of nodes <= 100. -10^4 <= Node.val <= 10^4.
// Return true if both trees are identical structurally and by value.
