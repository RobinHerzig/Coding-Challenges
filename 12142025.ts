// Car fleets. (Monotonic stack)

function carFleet(target: number, position: number[], speed: number[]): number {
  // Step 1: Combine speed and distance. Sort by distance.
  const vehicles = position.map((elem, index) => [elem, speed[index]]).sort((a, b) => b[0] - a[0]);
  const stack: number[] = [];

  // Step 2: Monotonic stack.
  for (const [currPosition, currSpeed] of vehicles) {
    const time = (target - currPosition) / currSpeed;

    while (stack.length && time <= stack.at(-1)!) {
      stack.pop();
    }

    stack.push(time);
  }

  return stack.length;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3);
console.log(carFleet(10, [3], [3]), 1);
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]), 1);
// https://leetcode.com/problems/car-fleet/

// target: number. Ending mile. 0 < target <= 10^5.
// position: number[]. 1 <= position.length <= 10^5. 0 <= position[i] <= target. Starting mile of car.
// speed: number[]. 1 <= position.length <= 10^5. 0 < position[i] <= 10^6. Speed of car.

// Return the number of fleets that arrive at target.
// - Cars cannot pass. Speed of car fleet is the minimum of all cars in the fleet.
// - Cars are in the fleet if they catch up before or at target.
