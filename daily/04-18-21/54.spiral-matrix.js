/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 *
 * time: O(n * m), where n = matrix.length and m = matrix[0].length
 * space: O(n * m)
 */
 var spiralOrder = function(matrix) {
  const traversal = [];

  let dir = 0;

  let lb = 0;
  let rb = matrix[0].length - 1;
  let tb = 0;
  let bb = matrix.length - 1;

  while (lb <= rb && tb <= bb) {
    switch (dir) {
      case 0: /** (top) left to right */
        for (let c = lb; c <= rb; c++) {
          traversal.push(matrix[tb][c])
        }

        tb += 1;
        break;
      case 1: /** (right) top to bottom */
        for (let r = tb; r <= bb; r++) {
          traversal.push(matrix[r][rb]);
        }

        rb -= 1;
        break;
      case 2: /** (bottom) right to left */
        for (let c = rb; c >= lb; c--) {
          traversal.push(matrix[bb][c]);
        }

        bb -= 1;
        break;
      case 3: /** (left) bottom to top */
        for (let r = bb; r >= tb; r--) {
          traversal.push(matrix[r][lb]);
        }

        lb += 1;
        break;
      default:
        throw new Error('dir is out of bounds');
        break;
    }

    dir = (dir + 1) % 4;
  }

  return traversal;
};
// @lc code=end

