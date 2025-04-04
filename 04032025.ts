// Partition an array into pairs to return the maximum sum.

function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const sum = nums.filter((elem, index) => index % 2 === 0).reduce((a, c) => a + c, 0);
  return sum;
}

console.log(arrayPairSum([1, 4, 3, 2]), 4); // [1, 2] + [3, 4] === 1 + 3 = 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]), 9); // [1, 2] + [2, 5] + [6, 6] = 9
// https://leetcode.com/problems/array-partition/

// nums: number[]. 2 <= nums.length <= 2*10^4. Length is always even. -10^4 <= nums[i] <= 10^4.
// Return the max sum after grouping the values into pairs, and adding the mimimum values together.
