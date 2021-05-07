/*
 * @lc app=leetcode id=1091 lang=javascript
 *
 * [1091] Shortest Path in Binary Matrix
 *
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 *
 * time: O(n • m), n = grid.length, m = grid[0].length
 * space: O(n • m)
 */
var shortestPathBinaryMatrix = function(grid) {
  if (grid[0][0] === 1) return -1;

  const R = grid.length;
  const visited = new Array(R).fill(null).map(() => new Array(R).fill(false));
  const queue = [[0, 0, 1]];
  let pathLength = 1

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift();

    if (r === R - 1 && c === R - 1) return dist;

    for (const [nextR, nextC] of getNeighbors(grid, R, r, c)) {
      if (visited[nextR][nextC]) continue;

      visited[nextR][nextC] = true;
      queue.push([nextR, nextC, dist + 1]);
    }
  }

  return -1;
};

function getNeighbors(grid, R, r, c) {
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1],
                      [0, 1], [1, -1], [1, 0], [1, 1]];
  const neighbors = [];

  for (const [offsetR, offsetC] of directions) {
    const nextR = r + offsetR;
    const nextC = c + offsetC;

    if (isOutOfBounds(R, nextR, nextC)) continue;
    if (grid[nextR][nextC] === 1) continue;

    neighbors.push([nextR, nextC]);
  }

  return neighbors;
}

function isOutOfBounds(R, r, c) {
  return r < 0 || r >= R || c < 0 || c >= R;
}
// @lc code=end

