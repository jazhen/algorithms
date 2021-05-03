/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 *
 * time: O(n * m), n = obstacleGrid.length, m =  obstacleGrid[0].length
 * space: O(n * m)
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const R = obstacleGrid.length;
  const C = obstacleGrid[0].length;

  const dp = new Array(R).fill(0).map(() => new Array(C).fill(0));

  for (let r = 0; r < R; r++) {
    if (obstacleGrid[r][0] === 1) break;

    dp[r][0] = 1;
  }

  for (let c = 0; c < C; c++) {
    if (obstacleGrid[0][c] === 1) break;

    dp[0][c] = 1;
  }

  for (let r = 1; r < R; r++) {
    for (let c = 1; c < C; c++) {
      if (obstacleGrid[r][c] === 1) continue;

      dp[r][c] += dp[r][c - 1] + dp[r - 1][c];
    }
  }

  return dp[R - 1][C - 1];
};
// @lc code=end

