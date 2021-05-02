/*
 * @lc app=leetcode id=983 lang=javascript
 *
 * [983] Minimum Cost For Tickets
 *
 * https://leetcode.com/problems/minimum-cost-for-tickets/
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const daysSet = new Set(days);
  const lastDay = days[days.length - 1];
  const dp = new Array(lastDay + 1).fill(0);

  for (let day = 1; day <= lastDay; day++) {
    if (daysSet.has(day)) {
      dp[day] = Math.min((dp[day - 1] ?? 0) + costs[0],
                         (dp[day - 7] ?? 0) + costs[1],
                         (dp[day - 30] ?? 0) + costs[2]);
    } else {
      dp[day] = dp[day - 1];
    }
  }

  return dp[lastDay];
};
// @lc code=end

