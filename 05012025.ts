// Majority Element (Boyer-Moore majority vote algorithm).

function majorityElement(nums: number[]): number {
  let current: number = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      current = num;
    }

    current === num ? count++ : count--;
  }

  return current;
};

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
// https://leetcode.com/problems/majority-element/

// nums: number[]. 1 <= nums.length <= 5*10^4. -10^9 <= nums[i] <= 10^9.
// Return the majority element (element appears more than (nums.length / 2) times). Solve in O(n) time and O(1) space.