// Range product queries of powers.

function productQueries(num: number, queries: number[][]): number[] {
  // Step 1: Populate powers with powers of 2 that reduce to num.
  const binary = num.toString(2).split("").reverse();
  const powers: number[] = [];

  // Trick to caculating correct powers of 2.
  for (let i = 0; i < binary.length; i++) {
    const bit = binary[i];

    if (bit === "1") {
      powers.push(Math.pow(2, i));
    }
  }

  // Step 2: Calcute the product of powers using queries as the left and right index bounds.
  const result: number[] = [];
  const MODULO = 10 ** 9 + 7;

  for (const [left, right] of queries) {
    let product = 1;

    for (let i = left; i <= right; i++) {
      const power = powers[i];
      product *= power;
    }

    result.push(product % MODULO);
  }

  return result;
}

console.log(productQueries(15, [[0, 1], [2, 2], [0, 3]])); // Powers = [1, 2, 4, 8]. Reduces to 15.
console.log(productQueries(2, [[0, 0]]), [2]);
// https://leetcode.com/problems/range-product-queries-of-powers/

// num: number. 1 <= num <= 10^9.
// queries: number[][]. 1 <= queries.length <= 10^5. 0 <= queries[i][0] and [1] <= powers.length.
// Return powers, a number[] composed of the minimum number of powers of 2 that add to num. Sort in non-decreasing order.
