/*
 * @lc app=leetcode id=807 lang=javascript
 *
 * [807] Max Increase to Keep City Skyline
 *
 * https://leetcode.com/problems/max-increase-to-keep-city-skyline/
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 *
 * time: O(n • m), n = grid.length, m = grid[0].length
 * space: O(n • m)
 */
 var maxIncreaseKeepingSkyline = function(grid) {
  const rowMax = grid.length;
  const colMax = grid[0].length;

  const newHeights = JSON.parse(JSON.stringify(grid));

  const leftRightSkyline = grid.map((row) => Math.max(...row));
  const topBottomSkyline = transpose(grid).map((col) => Math.max(...col));

  let maxIncrease = 0;

  for (let row = 0; row < rowMax; row++) {
    for (let col = 0; col < colMax; col++) {
      newHeights[row][col] = Math.min(topBottomSkyline[col], leftRightSkyline[row]);
      const increaseAmount = newHeights[row][col] - grid[row][col];
      maxIncrease += increaseAmount;
    }
  }

  return maxIncrease;
};

function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}
// @lc code=end

