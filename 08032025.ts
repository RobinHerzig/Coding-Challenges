// Days until next higher temperature. (Monotonic stack)

function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = new Array(temperatures.length).fill(0);

  // Step 1: Iterate dataset.
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    // Step 2: While current temperature is greater than top of stack, pop the stack.
    while (temperature > temperatures[stack.at(-1)]) {
      const index = stack.pop();

      // Step 3: Calculate the index differences.
      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;
}

console.log(dailyTemperatures([30, 60, 90]), [1, 1, 0]);
console.log(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
// https://leetcode.com/problems/daily-temperatures/

// temperatures: number[]. 1 <= temperatures.length <= 10^5. 30 <= temperatures[i] <= 100.
// Return an array containing the number of days until a higher tempature is reached.
// If there is no future day with a higher temperature, use 0.
