// Merge sorted lists. (Linked lists)

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let curr = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }

    curr = curr.next;
  }

  if (list1) {
    curr.next = list1;
  }

  if (list2) {
    curr.next = list2;
  }

  return head.next;
}

// https://leetcode.com/problems/merge-two-sorted-lists/

// list1: ListNode | null. 0 <= number of nodes <= 50. -100 <= Node.val <= 100. Sorted in non-decreasing order.
// list2: ListNode | null. 0 <= number of nodes <= 50. -100 <= Node.val <= 100. Sorted in non-decreasing order.
// Merge the lists into a single sorted list, and return the head.
