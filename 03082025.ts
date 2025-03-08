// Nim Game.

function canWinNim(num: number): boolean {
  return num % 4 !== 0;
};

console.log(canWinNim(1), true);
console.log(canWinNim(2), true);
console.log(canWinNim(3), true);
console.log(canWinNim(4), false);
console.log(canWinNim(5), true);
console.log(canWinNim(6), true);
console.log(canWinNim(7), false);
console.log(canWinNim(8), false);
console.log(canWinNim(13), true);
console.log(canWinNim(17), true);
console.log(canWinNim(21), true);
console.log(canWinNim(25), true);

// num: number. 1 <= n <= 2^31 - 1.
// Return whether I can win the Nim Game. I always go first. There are 3 stones.

// https://leetcode.com/problems/nim-game/