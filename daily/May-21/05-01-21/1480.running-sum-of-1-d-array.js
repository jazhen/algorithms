/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 *
 * https://leetcode.com/problems/running-sum-of-1d-array/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * time: O(n), n = nums.length
 * space: O(1)
 */
var runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;
};
// @lc code=end

