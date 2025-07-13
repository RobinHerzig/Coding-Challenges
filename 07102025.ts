// Top K frequent elements. (Priority queue)

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>(); // [num, count]
  const heap = new MaxPriorityQueue<number[]>(([num, count]) => count); // Pass callback to order by count.
  const result = [];

  // Step 1: Populate map.
  nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

  // Step 2: Populate heap.
  for (const [num, frequency] of map) {
    heap.enqueue([num, frequency]);
  }

  // Step 3: Populate result.
  for (let i = 0; i < k; i++) {
    const [num, count] = heap.dequeue() as number[];
    result.push(num);
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topKFrequent([1], 1), [1]);
// https://leetcode.com/problems/top-k-frequent-elements/

// nums: number[]. 1 <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.
// k: number. 1 <= k <= number of unique elements in the array.
// Return the K most frequent elements. Each element in the return should be unique.
