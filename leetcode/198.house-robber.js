/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * time: O(nums.length)
 * space: O(nums.length)
 */
var rob = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[dp.length - 1];
};
// @lc code=end

