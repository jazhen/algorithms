/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 *
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 *
 * time: TLE - 2^(R * C), where R = matrix.length, C = matrix[0].length
 * space: O(matrix.length * matrix[0].length)
 */
 var longestIncreasingPathDFS = function(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;

  let longestPathLength = 0;

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      /** same logic as https://leetcode.com/problems/max-area-of-island/ */
      const pathLength = dfs(matrix, R, C, r, c);
      longestPathLength = Math.max(longestPathLength, pathLength);
    }
  }

  return longestPathLength;
};

function dfs(matrix, R, C, r, c, prev = -Infinity) {
  if (r < 0 || r >= R || c < 0 || c >= C) return 0;
  if (matrix[r][c] <= prev) return 0;

  return 1 + Math.max(dfs(matrix, R, C, r + 1, c, matrix[r][c]),
                      dfs(matrix, R, C, r - 1, c, matrix[r][c]),
                      dfs(matrix, R, C, r, c + 1, matrix[r][c]),
                      dfs(matrix, R, C, r, c - 1, matrix[r][c]));
}

/**
 * @param {number[][]} matrix
 * @return {number}
 *
 * time: O(matrix.length * matrix[0].length)
 * space: O(matrix.length * matrix[0].length)
 */
 var longestIncreasingPathDFSWithMemo = function(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;

  const memo = new Array(R).fill(null).map(() => new Array(C).fill(0));
  let longestPathLength = 0;

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      const pathLength = dfs(memo, matrix, R, C, r, c);
      longestPathLength = Math.max(longestPathLength, pathLength);
    }
  }

  return longestPathLength;
};

function dfs(memo, matrix, R, C, r, c, prev = -Infinity) {
  if (r < 0 || r >= R || c < 0 || c >= C) return 0;

  if (matrix[r][c] <= prev) return 0;

  if (memo[r][c]) return memo[r][c];

  memo[r][c] = 1 + Math.max(dfs(memo, matrix, R, C, r + 1, c, matrix[r][c]),
                      dfs(memo, matrix, R, C, r - 1, c, matrix[r][c]),
                      dfs(memo, matrix, R, C, r, c + 1, matrix[r][c]),
                      dfs(memo, matrix, R, C, r, c - 1, matrix[r][c]));

  return memo[r][c];
}
// @lc code=end

