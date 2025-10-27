// Top K frequent elements. (Priority queue)

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  const heap = new MaxPriorityQueue<number[]>((arr) => arr[1]);
  const result: number[] = [];

  // Step 1: Populate map.
  nums.forEach((elem) => map.set(elem, (map.get(elem) || 0) + 1));

  // Step 2: Populate heap.
  for (const [num, count] of map) {
    heap.enqueue([num, count]);
  }

  // Step 3: Populate result.
  for (let i = 0; i <= k; i++) {
    const [num, count] = heap.dequeue();
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
