/*
 * @lc app=leetcode id=1197 lang=javascript
 *
 * [1197] Minimum Knight Moves
 *
 * https://leetcode.com/problems/minimum-knight-moves/
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var minKnightMoves = function(x, y) {
  const directions = [
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
    [-2, 1],
    [-2, -1],
    [-1, 2],
    [-1, -2]
  ]

  const visited = new Set();
  const queue = [[0, 0]];
  visited.add('[0,0]');

  let numMoves = 0;

  while (queue.length) {
    const numNextMoves = queue.length;

    for (let i = 0; i < numNextMoves; i++) {
      const [r, c] = queue.shift();

      if (r === x && c === y) return numMoves;

      for (const dir of directions) {
        const nextR = r + dir[0];
        const nextC = c + dir[1];

        if (visited.has(`[${nextR},${nextC}]`)) continue;

        queue.push([nextR, nextC]);
        visited.add(`[${nextR},${nextC}]`);
      }
    }

    numMoves += 1;
  }

  return -1;
};
// @lc code=end

