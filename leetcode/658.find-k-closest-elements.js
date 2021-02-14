// https://leetcode.com/problems/find-k-closest-elements/

/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
  arr.sort((a, b) => Math.abs(a - x) === Math.abs(b - x) ? a - b : Math.abs(a - x) - Math.abs(b - x));
  const result = arr.slice(0, k);
  return result.sort((a, b) => a - b);
};
// @lc code=end
