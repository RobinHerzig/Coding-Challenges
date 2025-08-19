// 4sum.

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // Step 1: Lock value 1.
  for (let i = 0; i < nums.length - 4; i++) {
    // Skip duplicate values.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Step 2: Lock value 2.
    for (let j = i + 1; j < nums.length - 3; j++) {
      // Skip duplicate values.
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // Step 3: Two-pointer algorithm for values 3 and 4.
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        const quad = [nums[i], nums[j], nums[k], nums[l]];

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          result.push(quad);

          k++;
          l--;

          // Skip duplicate values.
          while (nums[k] === nums[k - 1]) {
            k++;
          }

          while (nums[l] === nums[l + 1]) {
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
