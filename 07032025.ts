// Binary tree from right side. (Binary tree)

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const queue = [root];
  const result: number[] = [];

  while (queue.length > 0) {
    result.push(queue.at(-1).val);
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  return result;
}

// https://leetcode.com/problems/binary-tree-right-side-view/

// root: TreeNode | null. 0 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return an array of values that are on the rightmost side for each level.
// - Arrange from top to bottom.
