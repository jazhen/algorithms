/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 *
 * https://leetcode.com/problems/rotting-oranges/
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 *
 * time: O(m * n)
 * space: O(m * n) - recusion stack
 */
var orangesRottingDFS = function(grid) {
  const m = grid.length;
  const n = grid[0].length;

  let ans = 0;
  let turnedFreshOrangeRotten = true;

  while (turnedFreshOrangeRotten) {
    turnedFreshOrangeRotten = false;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 2) {
          for (const [x, y] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            const [i2, j2] = [i + x, j + y];

            if (i2 < 0 || i2 >= m || j2 < 0 || j2 >= n) continue;

            if (grid[i2][j2] === 1) {
              grid[i2][j2] = 3;
              turnedFreshOrangeRotten = true;
            }
          }
        }
      }
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 3) {
          grid[i][j] = 2;
        }
      }
    }

    if (turnedFreshOrangeRotten) ans++;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return ans;
};
// @lc code=end

