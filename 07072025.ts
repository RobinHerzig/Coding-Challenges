// Determine whether the list has a cycle. (Linked list) (Floyd's algorithm)

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let fast = head.next;
  let slow = head;

  while (fast && slow) {
    if (fast === slow) {
      return true;
    }

    fast = fast.next?.next;
    slow = slow.next;
  }

  return false;
}

// https://leetcode.com/problems/linked-list-cycle/

// head: ListNode | null. 1 <= number of nodes <= 10^4. -10^5 <= Node.val <= 10^5.
// Return whether or not the linked list has a loop/cycle.
