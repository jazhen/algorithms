/*
 * @lc app=leetcode id=986 lang=javascript
 *
 * [986] Interval List Intersections
 *
 * https://leetcode.com/problems/interval-list-intersections/
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 *
 * time: O(m + n), m = firstList.length, n = secondList.length
 * space: O(m + n)
 */
 var intervalIntersection = function(firstList, secondList) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < firstList.length && j < secondList.length) {
    if (isOverlapping(firstList[i], secondList[j])) {
      const intervalIntersection = getIntervalIntersection(firstList[i], secondList[j]);

      merged.push(intervalIntersection);
    }

    // remove the interval with the smallest endpoint
    // since intervals are disjoint, we know that a interval won't
    // have another intersection
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return merged;
};

function isOverlapping(a, b) {
  const start = Math.max(a[0], b[0]);
  const end = Math.min(a[1], b[1]);

  return end - start >= 0;
}

function getIntervalIntersection(a, b) {
  const start = Math.max(a[0], b[0]);
  const end = Math.min(a[1], b[1]);

  return [start, end];
}
// @lc code=end

