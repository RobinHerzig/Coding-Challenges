// Merge sorted lists. (Linked lists)

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let list3 = head;

  while (list1 && list2) {
    const val1 = list1.val;
    const val2 = list2.val;

    if (val1 < val2) {
      list3.next = list1;
      list1 = list1.next;
    } else {
      list3.next = list2;
      list2 = list2.next;
    }

    list3 = list3.next;
  }

  if (list1) {
    list3.next = list1;
  } else {
    list3.next = list2;
  }

  return head.next;
}

// https://leetcode.com/problems/merge-two-sorted-lists/

// list1: ListNode | null. 0 <= number of nodes <= 50. -100 <= Node.val <= 100. Sorted in non-decreasing order.
// list2: ListNode | null. 0 <= number of nodes <= 50. -100 <= Node.val <= 100. Sorted in non-decreasing order.
// Merge the lists into a single sorted list, and return the head.
