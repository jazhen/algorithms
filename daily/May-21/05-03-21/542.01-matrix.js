/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 *
 * https://leetcode.com/problems/01-matrix/
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 *
 * time: O(n * m), n = mat.length, m = mat[0].length
 * space: O(n * m)
 */
var updateMatrix = function(mat) {
  const R = mat.length;
  const C = mat[0].length;
  const queue = [];

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c]);
      } else {
        mat[r][c] = Infinity;
      }
    }
  }

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [offsetR, offsetC] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const nextR = r + offsetR;
      const nextC = c + offsetC;

      if (nextR < 0 || nextR >= R || nextC < 0 || nextC >= C) continue;
      if (mat[nextR][nextC] !== Infinity) continue;

      mat[nextR][nextC] = mat[r][c] + 1;
      queue.push([nextR, nextC]);
    }
  }

  return mat;
};
// @lc code=end

