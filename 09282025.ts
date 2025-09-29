// Koko Eating Bananas. (Binary search)

function minEatingSpeed(piles: number[], hours: number): number {
  let left = 1; // Lowest viable banana rate.
  let right = Math.max(...piles); // Highest viable banana rate.

  while (left <= right) {
    const middle = Math.ceil((left + right) / 2); // Current rate.
    const totalTime = piles.reduce((a, c) => a + Math.ceil(c / middle), 0); // Calculate hours to finish all piles.

    if (totalTime > hours) {
      left = middle + 1; // Increase rate.
    } else {
      right = middle - 1; // Decrease rate.
    }
  }

  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8), 4);
// [6, 7, 11], [2, 7, 11], [7, 11], [3, 11], [11], [7], [3], [];
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5), 30);
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6), 23);
// https://leetcode.com/problems/koko-eating-bananas/

// piles: number[]. 1 <= piles.length <= 10^4. 1 <= piles[i] <= 10^9. piles[i] is number of bananas in each pile.
// h: number. piles.length <= h <= 10^9. Hours the guards will be gone.
// Return the minimum number of bananas that can be eaten while still finishing all before the guards return.
// - Koko can only each from one pile an hour, in order.
