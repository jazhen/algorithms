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
  const waysToReachStep = new Array(n + 1).fill(0);
  waysToReachStep[1] = 1;
  waysToReachStep[2] = 2;

  for (let i = 3; i <= n; i++) {
    waysToReachStep[i] += waysToReachStep[i - 1] + waysToReachStep[i - 2];
  }

  return waysToReachStep[n];
};
// @lc code=end
