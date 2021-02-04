// https://leetcode.com/problems/min-cost-climbing-stairs/

/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = new Array(cost.length + 1).fill(Infinity);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (i === cost.length ? 0 : cost[i]);
  }

  return dp[cost.length];
};
// @lc code=end
