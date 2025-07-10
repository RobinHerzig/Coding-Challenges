// Top K frequent elements. (Priority queue)

function topKFrequent(nums: number[], k: number): number[] {
  const maxPQ = new MaxPriorityQueue();
  nums.forEach((num) => maxPQ.enqueue(num));
  const result: number[] = [];

  while (result.length < k) {
    const curr = Number(maxPQ.dequeue());
    const prev = result.at(-1);

    if (curr !== prev) {
      result.push(curr);
    }
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topKFrequent([1], 1), [1]);
// https://leetcode.com/problems/top-k-frequent-elements/

// nums: number[]. 1 <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.
// k: number. 1 <= k <= number of unique elements in the array.
// Return the K most frequent elements. Each element in the return should be unique.
