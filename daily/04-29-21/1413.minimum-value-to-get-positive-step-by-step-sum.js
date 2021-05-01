/*
 * @lc app=leetcode id=1413 lang=javascript
 *
 * [1413] Minimum Value to Get Positive Step by Step Sum
 *
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * time: O(n), n = nums.length
 * space: O(1)
 */
var minStartValue = function(nums) {
  let sum = 0;
  let minSum = Infinity;

  for (const n of nums) {
    sum += n;
    minSum = Math.min(minSum, sum);
  }

  return minSum < 0 ? 1 + Math.abs(minSum) : 1;
};
// @lc code=end

