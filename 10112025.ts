// Remove Nth node from end of list. (Linked list)

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head.next) {
    return null;
  }

  // Step 1: Create a dummy node to simplify edge cases (e.g. removing head)
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  // Step 2: Increment pointers.
  for (let i = 0; i <= n; i++) {
    fast = fast.next; // Move fast pointer n nodes ahead.
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // Step 3: Remove the target node
  slow.next = slow.next.next;

  return dummy.next;
}

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// head: ListNode | null. 1 <= number of nodes <= 30. 0 <= Node.val <= 100.
// n: number. 1 <= n <= number of nodes.
// Return the head after removing the nth node from the end of the list.
// - Achieve this in one pass.
