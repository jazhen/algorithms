// https://leetcode.com/problems/climbing-stairs/

/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= 2; j++) {
      dp[i] += dp[i - j];
    }
  }

  return dp[n];
};
// @lc code=end
