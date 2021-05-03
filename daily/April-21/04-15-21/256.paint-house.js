/*
 * @lc app=leetcode id=256 lang=javascript
 *
 * [256] Paint House
 *
 * https://leetcode.com/problems/paint-house/
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 *
 * time: O(costs.length)
 * space: O(1)
 */
 var minCost = function(costs) {
  for (let i = 1; i < costs.length; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
  }

  return Math.min(...costs[costs.length - 1]);
};
// @lc code=end

