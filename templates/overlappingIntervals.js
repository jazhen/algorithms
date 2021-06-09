/**
 * @param {number[]} intervalA
 * @param {number[]} invervalB
 * @return {boolean}
 */
function isOverlapping(intervalA, intervalB) {
  const start = Math.max(intervalA[0], intervalB[0]);
  const end = Math.min(intervalA[1], intervalB[1]);

  /** use > only if [1, 3] and [3, 5] would be considered overlapping */
  return end - start >= 0;
}

/**
 * @param {number[]} intervalA
 * @param {number[]} invervalB
 * @return {number[]}
 */
function getMergedInterval(intervalA, intervalB) {
  const start = Math.min(intervalA[0], intervalB[0]);
  const end = Math.max(intervalA[1], intervalB[1]);

  return [start, end];
}


/**
 * @param {number[]} intervalA
 * @param {number[]} invervalB
 * @return {number[]}
 */
function getOverlappingInterval(intervalA, intervalB) {
  const start = Math.max(intervalA[0], intervalB[0]);
  const end = Math.min(intervalA[1], intervalB[1]);

  return [start, end];
}
