// https://leetcode.com/problems/set-matrix-zeroes/

/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let zeroFirstRow = false;
  let zeroFirstCol = false;


  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        // use the first row and col to store whether
        // the row or col should be set to all zeroes
        matrix[0][j] = 0;
        matrix[i][0] = 0;

        // first row should be set to zeroes at end
        if (i === 0) zeroFirstRow = true;

        // first col should be set to zeroes at end
        if (j === 0) zeroFirstCol = true;
      }
    }
  }

  // loop for i = 1..m and j = 1..n so we
  // don't modify the information we saved previously
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // if the row or col was marked as a 0 row or col
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // set the first row to zeros
  if (zeroFirstCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  // set the first col to zeros
  if (zeroFirstRow) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  return matrix;
};
// time: O(mn)
// space: O(1)

// @lc code=end
