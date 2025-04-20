// Four sum (optimized O(n^3)).

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // Step 1: Fix first element.
  for (let i = 0; i < nums.length - 3; i++) {
    const currI = nums[i];
    const prevI = nums[i - 1];

    // Skip duplicate values.
    if (i > 0 && currI === prevI) {
      continue;
    }

    // Step 2: Fix second element.
    for (let j = i + 1; j < nums.length - 2; j++) {
      const currJ = nums[j];
      const prevJ = nums[j - 1];

      // Skip duplicate values.
      if (j > i + 1 && currJ === prevJ) {
        continue;
      }

      // Step 3: Use two pointer approach to iterate third and fourth elements.
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        let currK = nums[k];
        let currL = nums[l];
        const sum = currI + currJ + currK + currL;

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          result.push([currI, currJ, currK, currL]);
          let nextK = nums[k + 1];
          let nextL = nums[l - 1];

          // Skip duplicate values.
          while (k < l && (currK === nextK || currL === nextL)) {
            if (currK === nextK) {
              k++;
              currK = nums[k];
              nextK = nums[k + 1];
            }

            if (currL === nextL) {
              l--;
              currL = nums[l];
              nextL = nums[l - 1];
            }
          }

          k++;
          l--;
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
