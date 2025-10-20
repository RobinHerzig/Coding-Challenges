// Copy list with random pointer. (Linked list)

function copyRandomList(head: _Node | null): _Node | null {
  if (!head) {
    return null;
  }

  const map = new Map<_Node, _Node>(); // {old node: new node};
  let curr = head;

  // Step 1: Create new nodes.
  while (curr) {
    const node = new _Node();
    map.set(curr, node);

    curr = curr.next;
  }

  curr = head;

  // Step 2: Assign val, next, and random attributes.
  while (curr) {
    const node = map.get(curr);

    const val = curr.val;
    const next = map.get(curr.next) || null;
    const random = map.get(curr.random) || null;

    node.val = val;
    node.next = next;
    node.random = random;

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
