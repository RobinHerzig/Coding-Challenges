// Majority Element. (Boyer-Moore majority vote algorithm)

function majorityElement(nums: number[]): number {
  let result = 0;
  let votes = 0;

  for (const num of nums) {
    if (votes < 1) {
      result = num;
    }

    if (result === num) {
      votes++;
    } else {
      votes--;
    }
  }

  return result;
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
console.log(majorityElement([6, 5, 5]), 5);
console.log(majorityElement([5]), 5);
// https://leetcode.com/problems/majority-element/

// nums: number[]. 1 <= nums.length <= 5*10^4. -10^9 <= nums[i] <= 10^9.
// Return the majority element (element appears more than (nums.length / 2) times). Solve in O(n) time and O(1) space.