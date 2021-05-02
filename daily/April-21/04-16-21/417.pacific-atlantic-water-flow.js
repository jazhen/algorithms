/*
 * @lc app=leetcode id=417 lang=javascript
 *
 * [417] Pacific Atlantic Water Flow
 *
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 *
 * time: O(heights.length * heights[0].length)
 * space: O(heights.length * heights[0].length)
 */
var pacificAtlantic = function(heights) {
  const R = heights.length;
  const C = heights[0].length;
  const pacificReachable = new Array(R).fill(null).map(() => new Array(C).fill(false));
  const atlanticReachable = new Array(R).fill(null).map(() => new Array(C).fill(false));

  for (let r = 0; r < R; r++) {
    /** look at cells on the left bound (pacific) */
    dfs(heights, R, C, r, 0, pacificReachable);

    /** look at cells on the right bound (atlantic) */
    dfs(heights, R, C, r, C - 1, atlanticReachable);
  }

  for (let c = 0; c < C; c++) {
    /** look at cells on the upper bound (pacific) */
    dfs(heights, R, C, 0, c, pacificReachable);

    /** look at cells on the lower bound (pacific) */
    dfs(heights, R, C, R - 1, c, atlanticReachable);
  }

  const ans = [];

  /** get the intersection of the two arrays */
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (pacificReachable[r][c] && atlanticReachable[r][c]) {
        ans.push([r, c]);
      }
    }
  }

  return ans;
};

/** traverse backwards, keeping track of the previous cell's value */
function dfs(heights, R, C, r, c, reachable, prev = -Infinity) {
  if (r < 0 || r >= R || c < 0 || c >= C) return;

  /** traversing backwards, so look for >= */
  if (heights[r][c] < prev) return;

  if (reachable[r][c]) return;

  reachable[r][c] = true;

  for (const [x, y] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    dfs(heights, R, C, r + x, c + y, reachable, heights[r][c]);
  }
}
// @lc code=end

