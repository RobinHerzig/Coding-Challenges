// Search for value in 2D matrix. (Binary search)

function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length * matrix[0].length; // Use single number index format.

  // Binary search algorithm.
  while (left < right) {
    const leftElem = returnElem(left);
    const rightElem = returnElem(right);
    const middle = Math.floor((left + right)/ 2);
    const middleElem = returnElem(middle);

    if (middleElem < target) {
      left = middle + 1;
    } else if (middleElem > target) {
      right = middle - 1;
    } else {
      return true;
    }
  }

  // Get matrix elem from single number index.
  function returnElem(num: number): number {
    const length = matrix[0].length;
    const i = Math.floor(num / length) || 0;
    const j = num % length || 0;

    return matrix[i][j];
  }

  return false;
}

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3), true);
// console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13), false);
// https://leetcode.com/problems/search-a-2d-matrix/

// matrix: number[][]. 1 <= matrix.length <= 100. 1 <= matrix[i].length <= 100. -10^4 <= matrix[i][j] <= 10^4.
// target: number. -10^4 <= target <= 10^4.
// Return true if target is in the matrix, or false if it's not.
// Solve in O(log(m * n)) time complexity.
