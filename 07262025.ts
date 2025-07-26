// 3sum.

function threeSum(nums: number[]): number[][] {
  // Step 1: Sort array.
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  // Step 2: Fix first value.
  for (let i = 0; i < nums.length - 2; i++) {
    // Increment past duplicate values.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Step 3: Use two-pointer algorithm on values two and three.
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]]);

        j++;
        k--;

        // Increment past duplicate values.
        while (nums[j] === nums[j - 1]) {
          j++;
        }
  
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]);
console.log(threeSum([0, 1, 1]), []);
console.log(threeSum([0, 0, 0]), [[0, 0, 0]]);
console.log(threeSum([0, 0, 0, 0, 0, 0, 0]), []);
// https://leetcode.com/problems/3sum/

// nums: number[]. 3 <= nums.length <= 3000. -10^5 <= nums[i] <= 10^5.
// Return number[][] of all distinct triplets that add to 0.
