// Merge two binary trees.

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1 && !root2) {
    return null;
  }

  const root3 = new TreeNode();

  (function dfs(node1: TreeNode | null, node2: TreeNode | null, node3: TreeNode | null): null {
    if (!node1 && !node2) {
      return null;
    }

    const sum = (node1?.val ?? 0) + (node2?.val ?? 0);
    node3.val = sum;

    if (node1?.left || node2?.left) {
      const node3Left = new TreeNode();
      node3.left = node3Left;
      dfs(node1?.left || null, node2?.left || null, node3.left);
    }

    if (node1?.right || node2?.right) {
      const node3Right = new TreeNode();
      node3.right = node3Right;
      dfs(node1?.right || null, node2?.right || null, node3.right);
    }
  })(root1, root2, root3);

  return root3;
}

// function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
//   if (!root1 && !root2) {
//     return null;
//   }

//   const newNode = new TreeNode(
//     (root1?.val ?? 0) + (root2?.val ?? 0),
//     mergeTrees(root1?.left ?? null, root2?.left ?? null),
//     mergeTrees(root1?.right ?? null, root2?.right ?? null)
//   );

//   return newNode;
// }


// https://leetcode.com/problems/merge-two-binary-trees/

// root1: TreeNode | null.
// root2: TreeNode | null.
// Return the result of merging both trees. Nodes may or may not overlap. If the do overlap, use the value sum.
