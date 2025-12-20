// Add two numbers. (Linked list)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const result = new ListNode();
  let l3 = result;
  let carry = false;

  while (l1 || l2 || carry) {
    const l1Val = l1?.val || 0;
    const l2Val = l2?.val || 0;

    const sum = l1Val + l2Val + Number(carry);
    carry = sum >= 10;
    const l3Val = sum % 10;
    l3.next = new ListNode(l3Val);

    l1 = l1?.next;
    l2 = l2?.next;
    l3 = l3.next;
  }

  return result.next;
}

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8]); // 342 + 465 = 807
// console.log(addTwoNumbers([0], [0]), [0]);
// console.log(addTwoNumbers([[9, 9, 9, 9, 9, 9, 9]], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
// https://leetcode.com/problems/add-two-numbers/

// l1: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// l2: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// Concatenate both linked lists and return the sum of the two values.
