// Maximum depth of binary tree. (Binary tree) (Depth-first search) (Stack)

function maxDepth(root: TreeNode | null): number {
  const stack = [[root, 1]]; // Node, depth
  let maxDepth = 0;

  while (stack.length > 0) {
    const [node, depth] = stack.pop() as [TreeNode, number];

    if (node) {
      maxDepth = Math.max(maxDepth, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return maxDepth;
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return the tree's maximum depth using a depth-first search algorithm.
