/*
 * @lc app=leetcode id=1889 lang=javascript
 *
 * [1889] Minimum Space Wasted From Packaging
 *
 * https://leetcode.com/problems/minimum-space-wasted-from-packaging/
 */

// @lc code=start
/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
var minWastedSpace = function (packages, boxes) {
  packages.sort((a, b) => a - b);

  const sum = packages.reduce((acc, curr) => acc + curr, 0);
  let minWaste = Infinity;

  for (const box of boxes) {
    box.sort((a, b) => a - b);

    if (packages[packages.length - 1] > box[box.length - 1]) continue;

    let currWaste = 0;
    let i = 0;

    for (const boxSize of box) {
      const j = getLargestPackageIndex(packages, boxSize);
      currWaste += boxSize * (j - i);
      i = j;
    }

    minWaste = Math.min(minWaste, currWaste);
  }

  return minWaste === Infinity ? -1 : (minWaste - sum) % (1e9 + 7);
};

function getLargestPackageIndex(packages, boxSize) {
  let start = 0;
  let end = packages.length;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (packages[mid] > boxSize) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}
// @lc code=end
