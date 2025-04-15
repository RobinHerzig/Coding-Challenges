// Two sum using binary search tree.

function findTarget(root: TreeNode | null, k: number): boolean {
  const nums = new Set<number>();
  let isTwoSum = false;

  (function dfs(node: TreeNode | null): undefined {
    if (!node) {
      return undefined;
    }

    const val = node.val;
    const difference = k - val;

    if (nums.has(difference)) {
      isTwoSum = true;
      return undefined;
    }

    nums.add(val);
    dfs(node.left);
    dfs(node.right);
  })(root);

  return isTwoSum;
}

// https://leetcode.com/problems/two-sum-iv-input-is-a-bst

// root: TreeNode | null. 1 <= number of nodes <= 10^4. -10^4 <= Node.val <= 10^4. Valid binary search tree.
// k: number. -10^5 <= k <= 10^5.
// Return whether there exists two nodes which sum adds to k.
