// https://leetcode.com/problems/number-of-longest-increasing-subsequence

/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1);
  const count = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
  }

  const longest = Math.max(...dp);

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (dp[i] === longest) {
      res += count[i];
    }
  }

  return res;
};
// @lc code=end
