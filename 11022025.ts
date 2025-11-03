// Copy list with random pointer. (Linked list)

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>();
  let curr = head;

  // Step 1: Create nodes for new list.
  while (curr) {
    const node = new _Node();
    map.set(curr, node);

    curr = curr.next;
  }

  curr = head;

  // Step 2: Assign val, next, and random pointers.
  while (curr) {
    const node = map.get(curr);
    const val = curr.val;
    const next = map.get(curr.next);
    const random = map.get(curr.random);

    node.val = val;
    node.next = next || null;
    node.random = random || null;

    curr = curr.next;
  }

  return map.get(head);
}

// https://leetcode.com/problems/copy-list-with-random-pointer/

// head: _Node| null. 0 <= number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return the head of the deep copy of the list.
// - All nodes contain a random_index attribute, pointing to another node.
// - All returned nodes must be new with identical val, next, and random values.
// - The random pointer must point to the new nodes as well.
