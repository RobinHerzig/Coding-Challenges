// Reverse linked list. (Linked list)

function reverseList(head: ListNode | null): ListNode | null {
  let node = head;
  let prev = null;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
}

// https://leetcode.com/problems/reverse-linked-list/

// head: ListNode | null. 0 <= number of nodes <= 5000. -5000 <= Node.val <= 5000.
// Reverse and return the provided linked list.
