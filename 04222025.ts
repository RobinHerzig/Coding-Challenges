// Pancake sorting algorithm.

function pancakeSort(arr: number[]): number[] {
  const indexes: number[] = [];
  let currInteger = arr.length;

  while (currInteger >= 1) {
    // Pancake arr to move max integer to the front.
    const currIndex = arr.indexOf(currInteger);
    arr = arr
      .slice(0, currIndex + 1)
      .reverse()
      .concat(arr.slice(currIndex + 1));

    // Pancake arr to move max integer to the back.
    arr = arr.slice(0, currInteger).reverse().concat(arr.slice(currInteger));

    // Decrement currInteger to shrink window.
    currInteger--;

    // Cache flips for result.
    indexes.push(currIndex + 1);
    indexes.push(currInteger + 1);
  }

  return indexes;
}

console.log(pancakeSort([3, 2, 4, 1]), [4, 2, 4, 3]);
console.log(pancakeSort([1, 2, 3]), []);
// https://leetcode.com/problems/pancake-sorting/

// arr: number[]. 1 <= arr.length <= 100. 1 <= arr[i] <= arr.length. All values are unique integers.
// Sort the array using pancake flips. Retun the an array of indexes (k) from each flip.
// - Choose an index (k) present in the array.
// - Reverse the arr[0] - arr[k - 1] subarray.
// - Continue until the array is sorted in ascending order.
