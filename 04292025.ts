// 4sum.

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // Step 1: Fix first value.
  for (let i = 0; i < nums.length - 3; i++) {
    const currI = nums[i];

    // Skip duplicate values.
    if (i > 0 && currI === nums[i - 1]) {
      continue;
    }

    // Step 2: Fix second value.
    for (let j = i + 1; j < nums.length - 2; j++) {
      const currJ = nums[j];

      // Skip duplicate values.
      if (j > i + 1 && currJ === nums[j - 1]) {
        continue;
      }

      // Step 3: Use two-pointer technique to iterate remaining two values.
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

          // Skip duplicates.
          while (currK === nums[k]) {
            k++;
          }

          while (currL === nums[l]) {
            l--;
          }
        }
      }
    }
  }

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0), [
  [-2, -1, 1, 2],
  [-2, 0, 0, 2],
  [-1, 0, 0, 1],
]);
console.log(fourSum([2, 2, 2, 2, 2], 8), [[2, 2, 2, 2]]);
console.log(fourSum([1000000000, 1000000000, 1000000000, 1000000000], -294967296), []);
// https://leetcode.com/problems/4sum/

// nums: number[]. 1 <= nums.length <= 200. -10^9 <= nums[i] <= 10^9.
// target: number. -10^9 <= target <= 10^9.
// Return an array of all the unique quadruplets that add to the target.
