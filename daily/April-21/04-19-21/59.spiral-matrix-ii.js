/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 *
 * time: O(n^2), where n = matrix.length
 * space: O(n^2)
 */
 var generateMatrix = function(n) {
  const matrix = new Array(n).fill(null).map(() => []);

  let counter = 1;

  let dir = 0;

  let lb = 0;
  let rb = n - 1;
  let tb = 0;
  let bb = n - 1;

  while (lb <= rb && tb <= bb) {
    switch (dir) {
      case 0: /** (top) left to right */
        for (let c = lb; c <= rb; c++) {
          /**
           * this logic is the only difference compared to
           * https://leetcode.com/problems/spiral-matrix/
           * */
          matrix[tb][c] = counter++;
        }

        tb += 1;
        break;
      case 1: /** (right) top to bottom */
        for (let r = tb; r <= bb; r++) {
          matrix[r][rb] = counter++;
        }

        rb -= 1;
        break;
      case 2: /** (bottom) right to left */
        for (let c = rb; c >= lb; c--) {
          matrix[bb][c] = counter++;
        }

        bb -= 1;
        break;
      case 3: /** (left) bottom to top */
        for (let r = bb; r >= tb; r--) {
          matrix[r][lb] = counter++;
        }

        lb += 1;
        break;
      default:
        throw new Error('dir is out of bounds');
        break;
    }

    dir = (dir + 1) % 4;
  }

  return matrix;
};
// @lc code=end

