// 4sum.

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // Step 1: Fix value 1.
  for (let i = 0; i < nums.length - 3; i++) {
    const currI = nums[i];

    // Skip duplicate i values.
    if (i > 0 && nums[i - 1] === currI) {
      continue;
    }

    // Step 2: Fix value 2.
    for (let j = i + 1; j < nums.length - 2; j++) {
      const currJ = nums[j];

      // Skip duplicate j values.
      if (j > i + 1 && nums[j - 1] === currJ) {
        continue;
      }

      // Step 3: Two pointer algorithm to iterate values 3 and 4.
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        const currK = nums[k];
        const currL = nums[l];
        const sum = currI + currJ + currK + currL;

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          result.push([currI, currJ, currK, currL]);

          // Skip duplicate k values.
          while (nums[k] === currK) {
            k++;
          }

          // Skip duplicate l values.
          while (nums[l] === currL) {
            l--;
          }
        }
      }
    }
  }

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0), [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);
console.log(fourSum([2, 2, 2, 2, 2], 8), [[2, 2, 2, 2]]);
console.log(fourSum([1000000000, 1000000000, 1000000000, 1000000000], -294967296), []);
// https://leetcode.com/problems/4sum/

// nums: number[]. 1 <= nums.length <= 200. -10^9 <= nums[i] <= 10^9.
// target: number. -10^9 <= target <= 10^9.
// Return an array of all the unique quadruplets that add to the target.
