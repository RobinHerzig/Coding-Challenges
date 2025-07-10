// Last stone weight. (Priority queue)

function lastStoneWeight(stones: number[]): number {
  // Step 1: Declare and populate maxHeap.
  const maxHeap = new MaxPriorityQueue();
  stones.forEach((stone) => maxHeap.enqueue(stone));

  // Step 2: Iteratively dequeue max elements and enqueue the difference.
  while (maxHeap.size() > 1) {
    const x = Number(maxHeap.dequeue());
    const y = Number(maxHeap.dequeue());

    if (x !== y) {
      maxHeap.enqueue(x - y);
    }
  }

  // Step 3: Return remaining heap value or 0, if empty.
  return Number(maxHeap.dequeue()) || 0;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1);
console.log(lastStoneWeight([1]), 1);
// https://leetcode.com/problems/last-stone-weight/

// stones: number[]. 1 <= stones.length <= 30. 1 <= stones[i] <= 1000.
// Remove the two heaviest stones and add the difference back into the array.
// Repeat until, at most, one stone exists, and return that value.
