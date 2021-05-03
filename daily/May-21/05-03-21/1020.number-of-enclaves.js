/*
 * @lc app=leetcode id=1020 lang=javascript
 *
 * [1020] Number of Enclaves
 *
 * https://leetcode.com/problems/number-of-enclaves/
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 *
 * time: O(n • m), n = grid.length, m = grid[0].length
 * space: O(n • m)
 */
 var numEnclaves = function(grid) {
  const R = grid.length;
  const C = grid[0].length;

  for (let r = 0; r < R; r++) {
    if (grid[r][0] === 1) dfs(grid, R, C, r, 0);
    if (grid[r][C - 1] === 1) dfs(grid, R, C, r, C - 1);
  }

  for (let c = 0; c < C; c++) {
    if (grid[0][c] === 1) dfs(grid, R, C, 0, c);
    if (grid[R - 1][c] === 1) dfs(grid, R, C, R - 1, c);
  }

  let numEnclaves = 0;

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] === 1) numEnclaves++;
    }
  }

  return numEnclaves;
};

function dfs(grid, R, C, r, c) {
  if (r < 0 || r >= R || c < 0 || c >= C) return;
  if (grid[r][c] === 0) return;

  grid[r][c] = 0;

  for (const [offsetR, offsetC] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    dfs(grid, R, C, r + offsetR, c + offsetC);
  }
}
// @lc code=end

