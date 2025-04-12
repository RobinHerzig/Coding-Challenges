// Max sum from minimal paired values.

function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let maxSum = nums[0];

  while (left < right) {
    const sum = nums[left] + nums[right];
    maxSum = Math.max(maxSum, sum);

    left++;
    right--;
  }

  return maxSum;
}

console.log(minPairSum([3, 5, 2, 3]), 7);
console.log(minPairSum([3, 5, 4, 2, 4, 6]), 8);
// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array

// nums: number[]. 2 <= 10^5. Length is even. 1 <= nums[i] <= 10^5.
// Return the max sum after pairing values into smallest valued groups (sort and match largest values with smallest values).
