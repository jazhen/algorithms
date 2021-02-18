// https://leetcode.com/problems/two-city-scheduling/

/*
 * @lc app=leetcode id=1029 lang=javascript
 *
 * [1029] Two City Scheduling
 */

// @lc code=start
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

  let totalCost = 0;
  for (let i = 0; i < Math.floor(costs.length / 2); i++) {
    totalCost += costs[i][0];
  }

  for (let i = Math.floor(costs.length / 2); i < costs.length; i++) {
    totalCost += costs[i][1];
  }

  return totalCost;
};
// @lc code=end
