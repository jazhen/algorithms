// https://leetcode.com/problems/minimum-falling-path-sum/

/*
 * @lc app=leetcode id=931 lang=javascript
 *
 * [931] Minimum Falling Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  const n = matrix.length;

  for (let row = 1; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const up = matrix[row - 1][col];
      const upLeft = matrix[row - 1][col - 1] || Infinity;
      const upRight = matrix[row - 1][col + 1] || Infinity;

      matrix[row][col] += Math.min(up, upLeft, upRight);
    }
  }

  return Math.min(...matrix[n - 1]);
};
// @lc code=end

