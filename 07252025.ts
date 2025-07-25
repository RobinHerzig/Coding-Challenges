// 2sum. (Sorted)

function twoSum(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  let sum = nums[left] + nums[right];

  while (sum !== target) {
    if (sum < target) {
      left++;
    } else {
      right--;
    }

    sum = nums[left] + nums[right];
  }

  return [left + 1, right + 1];
}

console.log(twoSum([2, 7, 11, 15], 9), [1, 2]); // Indices 0 and 1.
console.log(twoSum([2, 3, 4], 6), [1, 3]); // Indices 0 and 2.
console.log(twoSum([-1, 0], -1), [1, 2]); // Indices 0 and 1.
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// nums: number[]. 2 <= nums.length <= 3*10^4. -1000 <= number[i] <= 1000. Sorted in non-decreasing order.
// target: number. -1000 <= target <= 1000.
// Return number[] containing the two nums that add to target.
