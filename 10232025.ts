// Search in a rotated sorted array. (Binary search)

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  // Step 1: Binary search to find pivot point.
  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  const pivot = left;

  // Step 2: Select left or right half of nums.
  if (target > nums.at(-1)) {
    // Target in left half.
    left = 0;
    right = pivot - 1;
  } else {
    // Target in right half.
    left = pivot;
    right = nums.length - 1;
  }

  // Step 3: Binary search to find index of target.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > target) {
      right = middle - 1;
    } else if (nums[middle] < target) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
console.log(search([1], 0), -1);
// https://leetcode.com/problems/search-in-rotated-sorted-array/

// nums: number[]. 1 <= nums.length <= 5000. -10^4 <= nums[i] < 10^4. Sorted and rotated. Distinct values.
// target: number. -10^4 <= target <= 10^4.
// Return the index of target, or -1 if it's not in nums. Solve in O(log n) time complexity.
