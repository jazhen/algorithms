// https://leetcode.com/problems/maximal-square/

/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let maxSquareLength = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '0') continue;

      if (i > 0 && j > 0) {
        const upLeft = matrix[i - 1][j - 1];
        const up = matrix[i - 1][j];
        const left = matrix[i][j - 1];

        matrix[i][j] = 1 + Math.min(upLeft, up, left);
      }

      maxSquareLength = Math.max(maxSquareLength, matrix[i][j]);
    }
  }

  return maxSquareLength ** 2 ;
};
// @lc code=end
