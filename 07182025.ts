// 4sum.

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // Step 1: Determine i value.
  for (let i = 0; i < nums.length - 3; i++) {
    // Iterate over non-unique values.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Step 2: Determine j value.
    for (let j = i + 1; j < nums.length - 2; j++) {
      // Iterate over non-unique values.
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      // Step 3: Two-pointer approach to determine k and l values.
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        // Calculate sum, add to results array if it equals target.
        const sum = nums[i] + nums[j] + nums[k] + nums[l];

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          const quadruplet = [nums[i], nums[j], nums[k], nums[l]];
          result.push(quadruplet);

          k++;
          l--;

          // Iterate over non-unique values.
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
