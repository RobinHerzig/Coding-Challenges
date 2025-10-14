// Add two numbers. (Linked list)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode();
  let curr = l3;
  let carry = false;

  while (l1 || l2 || carry) {
    // Step 1: Calculate val3.
    const val1 = l1?.val || 0;
    const val2 = l2?.val || 0;
    const sum = val1 + val2 + Number(carry); // If applicable, carry the previous 1.
    const val3 = sum % 10;
    carry = sum >= 10;

    // Step 2: Create ListNode and link to l3.
    const node = new ListNode(val3);
    curr.next = node;
    curr = curr.next;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return l3.next;
}

// l1: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// l2 ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// Concatenate both linked lists and return the sum of the two values.
