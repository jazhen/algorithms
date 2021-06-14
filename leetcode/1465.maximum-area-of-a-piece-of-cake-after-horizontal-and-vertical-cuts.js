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
 * time: n * log(n) + m * log(m), n = horizontalCuts.length, m = verticalCuts.length
 * space: O(1)
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  const maxHeight = getMaxGap(horizontalCuts, h);
  const maxWidth = getMaxGap(verticalCuts, w);

  return (BigInt(maxHeight) * BigInt(maxWidth)) % BigInt(10 ** 9 + 7);
};

function getMaxGap(cuts, size) {
  cuts.push(0, size);
  cuts.sort((a, b) => a - b);

  let maxGap = 0;

  for (let i = 1; i < cuts.length; i++) {
    maxGap = Math.max(maxGap, cuts[i] - cuts[i - 1]);
  }

  return maxGap;
}
// @lc code=end
