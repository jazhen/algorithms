// https://leetcode.com/problems/unique-paths/

/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const numUniquePathsAt = new Array(m).fill(0).map(() => new Array(n).fill(0));
  numUniquePathsAt[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const numUniquePathsOfUp = numUniquePathsAt[i - 1] ? numUniquePathsAt[i - 1][j] : 0;
      const numUniquePathsOfLeft = numUniquePathsAt[i][j - 1] || 0;
      numUniquePathsAt[i][j] += numUniquePathsOfUp + numUniquePathsOfLeft;
    }
  }

  return numUniquePathsAt[m - 1][n - 1];
};
// @lc code=end
