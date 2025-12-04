// Copy list with random pointer. (Linked list)

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>();

  // Step 1: Create new node for each existing node.
  let curr = head;

  while (curr) {
    const node = new _Node();
    map.set(curr, node);

    curr = curr.next;
  }

  // Step 2: Assign next, vals, and random pointers.
  for (const [old, node] of map) {
    const oldVal = old.val;
    const oldNext = old.next;
    const oldRandom = old.random;

    node.val = oldVal;
    node.next = map?.get(oldNext) || null;
    node.random = map?.get(oldRandom) || null;
  }

  return map.get(head);
}

// https://leetcode.com/problems/copy-list-with-random-pointer/

// head: _Node| null. 0 <= number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return the head of the deep copy of the list.
// - All nodes contain a random_index attribute, pointing to another node.
// - All returned nodes must be new with identical val, next, and random values.
// - The random pointer must point to the new nodes as well.
