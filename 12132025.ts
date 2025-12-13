// Remove Nth node from end of list. (Linked list)

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let left = dummy;
  let right = dummy;

  // Step 1: Iterate right pointer n spaces.
  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  // Step 2: Iterate pointers until right reaches end.
  while (right && right.next) {
    right = right.next;
    left = left.next;
  }

  // Step 3: Remove left pointer node.
  left.next = left.next.next;

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
