// Find Kth largest element from an array without sorting. (Priority queue)

function findKthLargest(nums: number[], k: number): number {
  const heap = new MaxPriorityQueue<number>();
  nums.forEach((num) => heap.enqueue(num));

  while (k > 1) {
    heap.dequeue();
    k--;
  }

  return heap.dequeue();
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5); // [6, 5, 4, 3, 2, 1]
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4); // [6, 5, 5, 4, 3, 3, 2, 2, 1]
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// nums: number[]. 1 <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.
// k: number. 1 <= k <= 10^5.
// Without sorting the array, return the kth largest element from the array.
