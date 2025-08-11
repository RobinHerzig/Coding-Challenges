// Search insert index. (Binary search)

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  // Binary search algorithm.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return left;
}

console.log(searchInsert([2, 3, 4, 5, 6], 4), 2);
console.log(searchInsert([2, 3, 4, 5, 6], 1), 0); // 4 // 0, 3 = 2 // 0, 1 = 0 // 0, -1
console.log(searchInsert([2, 3, 4, 5, 6], 8), 5); // 0, 4 = 2 // 3, 4 = 3 // 4, 4 = 4 // 5, 4 //
console.log(searchInsert([2], 2), 0);
// https://leetcode.com/problems/search-insert-position/

// nums: number[]. 1 <= nums.length <= 10^4. -10^4 <= nums[i] <= 10^4. Ascending order. Distinct integers.
// target: number. -10^4 <= target <= 10^4.
// Return the index of the target, or where it would be. Solve in O(logn) time.
