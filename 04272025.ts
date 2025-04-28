// Longest increasing subsequece.

function lengthOfLIS(nums: number[]): number {
  const dp = new Map<number, number>(); // Store max length for each index.
  let maxLength = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const curr = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const next = nums[j];

      if (curr < next) {
        const currLength = (dp.get(i) || 0) + 1;
        const nextLength = (dp.get(j) || 0);
        dp.set(j, Math.max(currLength, nextLength));
        
        maxLength = Math.max(maxLength, currLength, nextLength);
      }
    }
  }

  return maxLength + 1;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]), 4);
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]), 4);
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]), 1);
// https://leetcode.com/problems/longest-increasing-subsequence/

// nums: number. 1 <= nums.length <= 2500. -10^4 <= nums[i] <= 10^4.
// Return the length of the longest increasing subseqeunce.
