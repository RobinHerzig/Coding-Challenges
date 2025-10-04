// Reorder list. (Linked list)

function reorderList(head: ListNode | null): void {
  if (!head || !head.next) {
    return undefined;
  }

  // Step 1: Split list into two halves.
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let a = head; // First half.
  let b = slow.next; // Second half.
  slow.next = null; // Disconnect halves.

  // Step 2: Reverse second half.
  let prev = null;

  while (b) {
    const next = b.next;
    b.next = prev;
    prev = b;
    b = next;
  }

  b = prev; // head of reversed half

  // Step 3: Combine lists.
  while (a && b) {
    const nextA = a.next;
    const nextB = b.next;

    a.next = b;
    b.next = nextA;

    a = nextA!;
    b = nextB!;
  }

  return undefined;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]
// https://leetcode.com/problems/reorder-list/

// head: ListNode | null. 1 <= number of nodes 5*10^4. 1 <= Node.val <= 1000. Singly linked-list.
// Reorder the linked list like so: Node1, NodeN-1, Node2, NodeN-2...
// - Modify in-place. Do not return anything.
