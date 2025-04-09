// Partition array according to pivot value.

function pivotArray(nums: number[], pivot: number): number[] {
  const result: number[] = [];

  for (const num of nums) {
    if (num < pivot) {
      result.push(num);
    }
  }

  for (const num of nums) {
    if (num === pivot) {
      result.push(num);
    }
  }

  for (const num of nums) {
    if (num > pivot) {
      result.push(num);
    }
  }

  return result;
}

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10), [9, 5, 3, 10, 10, 12, 14]);
console.log(pivotArray([-3, 4, 3, 2], 2), [-3, 2, 4, 3]);
// https://leetcode.com/problems/partition-array-according-to-given-pivot

// nums: number[]. 1 <= nums.length <= 10^5. -10^6 <= nums[i] <= 10^6.
// pivot: number. An element of nums.
// Rearrange nums so that:
// - Every element less than pivot appears before every element greater than pivot.
// - Every element equal to pivot appears in between the elements.
// - The relative order of elements in maintained.
