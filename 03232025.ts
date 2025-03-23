// Intersection of arrays.

function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const intersection: number[] = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] < nums2[pointer2]) {
      pointer1++;
    } else if (nums1[pointer1] > nums2[pointer2]) {
      pointer2++;
    } else {
      intersection.push(nums1[pointer1]);
      pointer1++;
      pointer2++;
    }
  }

  return intersection;
}

console.log(intersect([1, 2, 2, 1], [2, 2]), [2, 2]);
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9]);
console.log(intersect([1, 2, 3, 4, 5], [1, 3, 5]), [1, 3, 5]);
console.log(intersect([1, 2, 3, 3, 3, 3, 4, 5, 5, 5], [1, 3, 5, 5, 5]), [1, 3, 5, 5, 5]);
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// nums1: number[]. 1 <= nums1.length <= 1000. 0 <= nums1[i] <= 1000.
// nums2: number[]. 1 <= nums2.length <= 1000. 0 <= nums2[i] <= 1000.
// Return the values that appear in both arrays. Include non-unique values as needed. The result can be in any order.
