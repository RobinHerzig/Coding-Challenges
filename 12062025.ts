// Count subarrays where max element appears at least K times. (Sliding window)

function countSubarrays(nums: number[], k: number): number {
  const map = new Map<number, number>(); // num: count
  const max = Math.max(...nums);
  let left = 0;
  let right = 0;
  let result = 0;

  while (right < nums.length) {
    // Step 1: Cache right pointer value.
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    // Step 2: Check window condition.
    while (map.get(max)! >= k) {
      result += nums.length - right;

      // Step 3: Increment left pointer.
      map.set(nums[left], map.get(nums[left])! - 1);
      left++;
    }

    // Step 4: Increment right pointer.
    right++;
  }

  return result;
}

console.log(countSubarrays([1, 3, 1, 3, 3], 2), 6); // The max value, 3, appears at least twice in 6 subarrays.
console.log(countSubarrays([1, 4, 2, 1], 3), 0);
// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/

// nums: number[]. 1 <= nums.length <= 10^5. 1 <= nums[i] <= 10^6.
// k: number. 1 <= k <= 10^5.
// Return the number of subarrays where the maximum element of nums appears at least k times.
