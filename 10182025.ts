// Add two numbers. (Linked list)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode();
  let curr = l3;
  let carry = false;

  while (l1 || l2 || carry) {
    const val1 = l1?.val || 0;
    const val2 = l2?.val || 0;
    const sum = val1 + val2 + Number(carry);
    const val3 = sum % 10;
    carry = sum >= 10;

    curr.next = new ListNode(val3);
    curr = curr.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return l3.next;
}

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8]); // 342 + 465 = 807
// console.log(addTwoNumbers([0], [0]), [0]);
// console.log(addTwoNumbers([[9, 9, 9, 9, 9, 9, 9]], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
// https://leetcode.com/problems/add-two-numbers/

// l1: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// l2: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// Concatenate both linked lists and return the sum of the two values.
