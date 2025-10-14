// Copy list with random pointer. (Linked list)

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) {
    return null;
  }

  const cache = new Map<_Node, _Node>(); // {old node: new node}
  let curr = head;

  // Step 1: Create nodes and cache old/new pairs.
  while (curr) {
    const newNode = new Node(curr.val);
    cache.set(curr, newNode);
    curr = curr.next;
  }

  curr = head;

  // Step 2: Populate next and random attributes.
  while (curr) {
    const newNode = cache.get(curr);
    const newNext = cache.get(curr.next) || null;
    const newRandom = cache.get(curr.random) || null;

    newNode.next = newNext;
    newNode.random = newRandom;
    curr = curr.next;
  }

  return cache.get(head);
}

// https://leetcode.com/problems/copy-list-with-random-pointer/

// head: TreeNode | null. 0 <= number of nodes <= 1000. -10^4 <= Node.val <= 10^4. Contains a random_index attribute, pointing to another node.
// Return the head of the deep copy of the list.
// - All nodes must be new with identical val, next, and random values.
// - The random pointer must point to the new nodes as well.