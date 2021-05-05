/*
 * @lc app=leetcode id=867 lang=javascript
 *
 * [867] Transpose Matrix
 *
 * https://leetcode.com/problems/transpose-matrix/
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 *
 * time: O(n • m), n = matrix.length, m = matrix[0].length
 * space: O(n • m)
 */
var transpose = function(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
};
// @lc code=end

