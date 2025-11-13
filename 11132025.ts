// Swapping node. (Linked lists)

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let left = dummy.next;
  let right = dummy.next;
  let fast = dummy.next;
  let slow = dummy.next;

  // Step 1: Set left pointer.
  for (let i = 1; i < k; i++) {
    left = left.next;
    fast = fast.next; // Setup for right pointer.
  }

  // Step 2: Set right pointer.
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  right = slow;

  // Step 3: Swap values.
  [left.val, right.val] = [right.val, left.val];

  return head;
}

// [1, 2, 3, 4, 5], 2 => [1, 4, 3, 2, 5];
// [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 5 => [7, 9, 6, 6, 8, 7, 3, 0, 9, 5];
// [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 9 => [5, 9, 6, 6, 7, 8, 3, 0, 9, 7];
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

// head: ListNode | null. k <= number of nodes <= 10^5. 0 <= Node.val <= 100.
// k: number. 1 <= k <= number of nodes.
// Return the head after swapping the kth-from-the-end value with kth-from-the-beginning value. 1-index. Don't swap the nodes themselves.
