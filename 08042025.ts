// Next greater element I. (Monotonic stack)

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>(); // {num1: num2}.
  const stack: number[] = [];

  // Step 1: Populate map with nums1 values.
  nums1.forEach((num1) => map.set(num1, -1));

  // Step 2: Iterate each value of nums2.
  for (const num2 of nums2) {
    while (num2 > stack.at(-1)!) {
      const num1 = stack.pop();

      // Assign map[num1] the next greatest value from num2.
      if (map.has(num1!)) {
        map.set(num1!, num2);
      }
    }

    stack.push(num2);
  }

  return [...map.values()];
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
// nums1 lists the values.
// Map the values to nums2, and return the next greater value, or -1.
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1]);
// https://leetcode.com/problems/next-greater-element-i/

// nums1: number[]. 1 <= nums1.length <= 1000. 0 <= nums1[i] <= 10^4. All integers are unique.
// nums2: number[]. 1 <= nums2.length <= 1000. 0 <= nums2[i] <= 10^4. All integers are unique.
// Using nums1 as a reference, map the values to nums2 and then return the next greater value, or -1 if none exists.
