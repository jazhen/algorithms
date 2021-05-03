/*
 * @lc app=leetcode id=1465 lang=javascript
 *
 * [1465] Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
 *
 * https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
 */

// @lc code=start
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 *
 * time: O(nlogn + mlogm), n = horizontalCuts.length, m = verticalCuts.length
 * space: O(1)
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  horizontalCuts.push(0, h);
  horizontalCuts.sort((a, b) => a - b);

  let maxHeight = 0;

  for (let i = 1; i < horizontalCuts.length; i++) {
    maxHeight = Math.max(maxHeight, horizontalCuts[i] - horizontalCuts[i - 1]);
  }

  verticalCuts.push(0, w);
  verticalCuts.sort((a, b) => a - b);

  let maxWidth = 0;

  for (let i = 1; i < verticalCuts.length; i++) {
    maxWidth = Math.max(maxWidth, verticalCuts[i] - verticalCuts[i - 1]);
  }

  return (maxWidth % 1e+7 * maxHeight % 1e+7);
};
// @lc code=end

