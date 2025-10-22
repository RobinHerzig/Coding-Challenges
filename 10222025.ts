// Reorder list. (Linked list)

function reorderList(head: ListNode | null): void {
  // Step 1: Find midpoint of linked list.
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next?.next;
    slow = slow.next;
  }

  let b = slow.next;
  slow.next = null;

  // Step 2: Reverse b portion of linked list.
  let curr = b;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let a = head;
  b = prev;

  // Step 3: Reorder nodes in "zipper" pattern.
  while (b) {
    const nextA = a.next;
    const nextB = b.next;

    a.next = b;
    b.next = nextA;

    a = nextA;
    b = nextB;
  }

  return undefined;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]
// https://leetcode.com/problems/reorder-list/

// head: ListNode | null. 1 <= number of nodes <= 5*10^4. 1 <= Node.val <= 1000.
// Reorder the linked list like so: Node1, NodeN-1, Node2, NodeN-2...
// - Modify in-place. Do not return anything.
