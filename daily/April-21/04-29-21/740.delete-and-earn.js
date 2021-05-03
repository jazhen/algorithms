/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 *
 * https://leetcode.com/problems/delete-and-earn/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  if (nums.length === 1) return nums[0];

  const maxVal = Math.max(...nums);
  const dp = new Array(maxVal + 1).fill(0);
  for (const n of nums) {
    dp[n] += n;
  }

  for (let i = 2; i <= maxVal; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + dp[i]);
  }

  return dp[maxVal];
};
// @lc code=end

