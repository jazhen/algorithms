// https://leetcode.com/problems/search-a-2d-matrix/

/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let row = 0;
  let col = n - 1;

  while (row < m && col >= 0) {
    let mid = Math.floor(row + (col - row) / 2);

    if (matrix[row][col] < target) {
      // search down
      row += 1;
    } else if (matrix[row][col] > target) {
      // search left
      col -= 1;
    } else {
      return true;
    }
  }

  return false;
};
// @lc code=end

