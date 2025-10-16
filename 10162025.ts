// Remove Nth node from end of list. (Linked list)

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head.next) {
    return null;
  }

  // Step 1: Create dummy node (simplifies edge cases, such as when removing head).
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  // Step 2: Increment fast pointer n nodes.
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Step 3: Increment both pointers until fast reaches end of list.
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // Step 4: Remove target node.
  slow.next = slow.next.next;

  return dummy.next;
}

// console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2), [1, 2, 3, 5]); // Remove the fourth node, as it's 2nd from the end.
// console.log(removeNthFromEnd([1], 1), []);
// console.log(removeNthFromEnd([1, 2], 1), [1]);
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// head: ListNode | null. 1 <= number of nodes <= 30. 0 <= Node.val <= 100.
// n: number. 1 <= n <= number of nodes.
// Return the head after removing the nth node from the end of the list.
// - Achieve this in one pass.
