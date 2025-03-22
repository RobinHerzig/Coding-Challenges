// Return the sum of all left leaves of a binary tree.

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;

  (function dfs(node): undefined {
    if (!node) {
      return undefined;
    }

    const left = node.left;
    const right = node.right;

    // Left node
    if (left) {
      if (!left.left && !left.right) {
        sum += left.val; // If node is a leaf (no child nodes), then add value to sum.
      }
      
      dfs(left);
    }

    if (right) {
      dfs(right);
    }
  })(root);

  return sum;
}

// https://leetcode.com/problems/sum-of-left-leaves/

// root: TreeNode | null. 1 <= number of nodes <= 1000. -1000 <= Node.val <= 1000.
// Return the sum of all left leaves.
