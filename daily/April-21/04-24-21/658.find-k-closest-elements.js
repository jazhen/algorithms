/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 *
 * https://leetcode.com/problems/find-k-closest-elements/
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElementsBinarySearch = function(arr, k, x) {
  let start = 0;
  let end = arr.length - k;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid + k] - x >= x - arr[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return arr.slice(start, start + k);
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElementsSorting = function(arr, k, x) {
  arr.sort((a, b) => Math.abs(a - x) === Math.abs(b - x) ? a - b : Math.abs(a - x) - Math.abs(b - x));
  const result = arr.slice(0, k);
  return result.sort((a, b) => a - b);
};
// @lc code=end
