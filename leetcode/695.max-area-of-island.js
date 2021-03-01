// https://leetcode.com/problems/max-area-of-island/

/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, getArea(grid, m, n, i, j));
    }
  }

  return max;
};

function getArea(grid, m, n, i, j) {
  if (i < 0 || i >= m || j < 0 || j >= n) return 0;
  if (grid[i][j] !== 1) return 0;

  grid[i][j] = 0;

  const right = getArea(grid, m, n, i + 1, j);
  const left = getArea(grid, m, n, i - 1, j);
  const up = getArea(grid, m, n, i, j + 1);
  const down = getArea(grid, m, n, i, j - 1);

  return (1 + right + left + up + down);
}
// @lc code=end

