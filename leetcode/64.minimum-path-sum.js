// https://leetcode.com/problems/minimum-path-sum/

/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  // grid: the min sum path to get to grid[x][y]
  const m = grid.length;
  const n = grid[0].length;

  // base cases:
  // calculate the min sum path of the first row of the grid
  for (let x = 1; x < n; x++) {
    grid[x][0] += grid[x - 1][0];
  }

  // calculate min sum path of the first column of the grid
  for (let y = 1; y < m; y++) {
    grid[0][y] += grid[0][y - 1];
  }

  // calculate the rest
  for (let x = 1; x < m; x++) {
    for (let y = 1; y < n; y++) {
        grid[x][y] += Math.min(grid[x - 1][y], grid[x][y - 1]);
    }
  }

  // the min sum to get to the bottom right corner
  return grid[m - 1][n - 1];
};
// time: O(n * m)
// space: O(1)
// @lc code=end
