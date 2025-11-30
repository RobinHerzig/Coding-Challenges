// Best time to buy and sell stock. (Dynamic programming)

function maxProfit(prices: number[]): number {
  let low = prices[0];
  let high = prices[0];
  let maxDifference = high - low;

  for (const price of prices) {
    if (price < low) {
      low = price;
      high = price;
    }

    if (price > high) {
      high = price;
    }

    maxDifference = Math.max(maxDifference, high - low);
  }

  return maxDifference;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// prices: number[]. 1 <= prices.length <= 10^5. 0 <= prices[i] <= 10^4.
// Return the maximum profit possible by buying low and selling high on single days.
