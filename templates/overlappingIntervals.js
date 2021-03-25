/**
 * @param {number[]} intervalA
 * @param {number[]} invervalB
 * @return {boolean}
 */
function isOverlapping(intervalA, intervalB) {
  const start = Math.max(intervalA[0], intervalB[0]);
  const end = Math.min(intervalA[1], intervalB[1]);

  return end - start >= 0;
}

/**
 * @param {number[]} intervalA
 * @param {number[]} invervalB
 * @return {number[]}
 */
function mergeIntervals(intervalA, intervalB) {
  const start = Math.min(intervalA[0], intervalB[0]);
  const end = Math.max(intervalA[1], intervalB[1]);

  return [start, end];
}
