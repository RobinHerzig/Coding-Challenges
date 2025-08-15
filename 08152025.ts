// Ways to express integer as sum of powers.

function numberOfWays(target: number, power: number): number {
  const MODOLO = 10 ** 9 + 7;
  const cache: number[] = [];
  const max = Math.floor(Math.pow(target, 1 / power));
  let count = 0;

  // Step 1: Populate cache with all candidate values.
  for (let i = 1; i <= max; i++) {
    cache.push(Math.pow(i, power));
  }

  // Step 2: Use DFS subset sum count algorithm to find all cache combinations that add to target.
  (function backtrack(start: number, sum: number): void {
    // Base case.
    if (sum === target) {
      count++;
      return undefined;
    }

    if (sum > target) {
      return undefined;
    }

    // Recursive case.
    for (let i = start; i < cache.length; i++) {
      backtrack(i + 1, sum + cache[i]); // Iterate each subsequent value.
    }
  })(0, 0);

  return count % MODOLO;
}

console.log(numberOfWays(10, 2), 1); // (3 ** 2) + (1 ** 2) = 10.
console.log(numberOfWays(4, 1), 2); // (4 ** 1) = 4 and (3 ** 1) + (1 ** 1) = 4.
// https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/?envType=daily-question

// num: number. 1 <= num <= 300.
// power: number. 1 <= power <= 5.
// Return a count of the ways num can be expressed as the sum of unique integers ** power.
// - Return the result modolo 10^9 + 7.
