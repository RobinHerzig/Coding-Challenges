// Search in a rotated sorted array. (Binary search)

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  // Step 1: Find the minimum value index, aka "pivot".
  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = right - 1;
    }
  }

  console.log("Step 1: ", nums[left], Math.min(...nums));

  const pivot = left;

  // Step 2: Choose the side of pivot with target.
  if (target <= nums.at(-1)) {
    left = pivot;
    right = nums.length - 1;
  } else {
    left = 0;
    right = pivot - 1;
  }

  console.log("Step 2: ", left, right);

  // Step 3: Find target index.
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

  return -1;
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
console.log(search([1], 0), -1);
// https://leetcode.com/problems/search-in-rotated-sorted-array/

// nums: number[]. 1 <= nums.length <= 5000. -10^4 <= nums[i] <10^4. Sorted and rotated. Distinct values.
// target: number. -10^4 <= target <= 10^4.
// Return the index of target, or -1 if it's not in nums. Solve in O(log n) time complexity.
