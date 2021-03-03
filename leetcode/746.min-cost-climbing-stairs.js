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
  const minCostToReachStep = new Array(cost.length + 1).fill(Infinity);
  minCostToReachStep[0] = cost[0];
  minCostToReachStep[1] = cost[1];

  for (let i = 2; i <= cost.length; i++) {
    const currentStepCost = i === cost.length ? 0 : cost[i];
    minCostToReachStep[i] = Math.min(minCostToReachStep[i - 1], minCostToReachStep[i - 2]) + currentStepCost;
  }

  return minCostToReachStep[cost.length];
};
// @lc code=end
