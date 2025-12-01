// Next greater element I. (Monotonic stack)

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result = new Map<number, number>();
  const stack: number[] = [];

  // Step 1: Set map to nums1 values.
  nums1.forEach((num) => result.set(num, -1));

  // Step 2: Monotonic stack on nums2 to find next larger value.
  for (const num of nums2) {
    while (num > stack.at(-1)!) {
      const prev = stack.pop()!;

      if (result.has(prev)) {
        result.set(prev, num);
      }
    }

    stack.push(num);
  }

  return [...result.values()];
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]), [3, -1]);
// https://leetcode.com/problems/next-greater-element-i/

// nums1: number[]. 1 <= nums1.length <= 1000. 0 <= nums1[i] <= 10^4. All integers are unique. Driving array.
// nums2: number[]. 1 <= nums2.length <= 1000. 0 <= nums2[i] <= 10^4. All integers are unique.
// Map each value from nums1 to nums2, then return the next greater nums2 value, or -1 if none exists.
