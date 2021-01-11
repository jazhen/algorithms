// https://leetcode.com/problems/flood-fill/

/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const sourceColor = image[sr][sc];

  // return if no changes will be made
  if (sourceColor === newColor) return image;

  const dfs = function(x, y) {
    // don't explore if coord is out of bounds
    if (x < 0 || x >= image.length || y < 0 || y >= image[0].length) {
      return;
    }

    // don't explore if coord is not the same as the source color
    if (image[x][y] !== sourceColor) return;

    // change the color of current coord to new color and explore 4-directionally
    image[x][y] = newColor;

    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  }

  // only explore nodes connected to the initial node
  dfs(sr, sc);
  return image;
};
// @lc code=end

