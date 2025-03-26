// Max length of consecutive ones.

function findMaxConsecutiveOnes(nums: number[]): number {
  let curr = 0;
  let maxLength = 0;

  for (const num of nums) {
    if (num === 1) {
      curr++;
    } else {
      maxLength = Math.max(maxLength, curr);
      curr = 0;
    }
  }

  return Math.max(maxLength, curr);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]), 3);
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]), 2);
// https://leetcode.com/problems/max-consecutive-ones/

// nums: number[]. 1 <= nums.length <= 10^5. nums[i] is 0 or 1.
// Return the maximum length of consecutive 1s.
