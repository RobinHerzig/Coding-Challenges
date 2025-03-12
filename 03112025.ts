// Create a range sum class.

class NumArray {
  private nums: number[];
  private prefixSum: number[];

  constructor(nums: number[]) {
    this.nums = nums;
    this.prefixSum = this.getPrefixSum(nums);
  }

  // Cache prefixSum array to quickly calculate the sum difference between two indexes
  getPrefixSum(nums) {
    const arr: number[] = [];
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
      total += this.nums[i];
      arr[i] = total;
    }

    return arr;
  }

  sumRange(left: number, right: number): number {
    if (left === 0) {
      return this.prefixSum[right];
    }

    return this.prefixSum[right] - this.prefixSum[left - 1];
  }
}

// https://leetcode.com/problems/range-sum-query-immutable

// nums: number[]. 1 <= nums.length <= 10^4. -10^5 <= nums[i] <= 10^5.
// left: number. 0 <= right < nums.length.
// right: number. 0 <= left < nums.length. At most 10^4 [left, right] pairs.
