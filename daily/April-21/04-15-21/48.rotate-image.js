/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 *
 * https://leetcode.com/problems/rotate-image/
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 *
 * time: O(n^2), where n = matrix.length
 * space: O(1)
 */
 var rotate = function(matrix) {
  /** rotate clockwise */
  return reverse(transpose(matrix));

  // /** rotate counter-clockwise */
  // return transpose(reverse(matrix));
};

function transpose(matrix) {
  const n = matrix.length;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < r; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  return matrix;
}

function reverse(matrix) {
  return matrix.map((row) => row.reverse());
}
// @lc code=end

