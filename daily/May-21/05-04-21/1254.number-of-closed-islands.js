/*
 * @lc app=leetcode id=1254 lang=javascript
 *
 * [1254] Number of Closed Islands
 *
 * https://leetcode.com/problems/number-of-closed-islands/
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
  const R = grid.length;
  const C = grid[0].length;

  let numClosedIslands = 0;

  // ignore groups of 0s connected to the borders by setting them to 1
  for (let r = 0; r < R; r++) {
    if (grid[r][0] === 0) floodFill(grid, R, C, r, 0);
    if (grid[r][C - 1] === 0) floodFill(grid, R, C, r, C - 1);
  }

  for (let c = 0; c < C; c++) {
    if (grid[0][c] === 0) floodFill(grid, R, C, 0, c)
    if (grid[R - 1][c] === 0) floodFill(grid, R, C, R - 1, c);
  }

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] !== 0) continue;

      floodFill(grid, R, C, r, c);
      numClosedIslands += 1;
    }
  }

  return numClosedIslands;
};

function floodFill(grid, R, C, r, c) {
  if (r < 0 || r >= R || c < 0 || c >= C) return;
  if (grid[r][c] !== 0) return;

  grid[r][c] = 1;

  for (const [offsetR, offsetC] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    floodFill(grid, R, C, r + offsetR, c + offsetC);
  }
}
// @lc code=end

