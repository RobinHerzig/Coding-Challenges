// Maximum depth of binary tree. (Binary tree) (Breadth-first search)

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    // Step 1: Store count of nodes in current level.
    const nodeCount = queue.length;

    for (let i = 0; i < nodeCount; i++) {
      // Step 2: Remove current level node from beginning of cache.
      const node = queue.shift();

      // Step 3: Add next level nodes to end of cache.
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    // Step 4: When current level is complete, increment depth.
    depth++;
  }

  return depth;
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 10^4.-100 <= Node.val <= 100.
// Return the tree's maximum depth using a breadth-first search algorithm.
