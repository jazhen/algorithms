// https://leetcode.com/problems/search-a-2d-matrix-ii/

/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
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

// time: O(m + n)
// space : O(1)

// @lc code=end

