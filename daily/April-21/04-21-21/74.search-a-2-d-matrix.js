/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix/
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *
 * time: O(log(n) + log(m))
 * space: O(1)
 */
var searchMatrixTwoBinarySearch = function(matrix, target) {
  const R = matrix.length;
  const C = matrix[0].length;

  /** Find the row the target should be in. */
  let rowStart = 0;
  let rowEnd = R - 1;

  while (rowStart < rowEnd) {
    const rowMid = Math.floor(rowStart + (rowEnd - rowStart) / 2);

    if (matrix[rowMid][C - 1] >= target) {
      rowEnd = rowMid;
    } else {
      rowStart = rowMid + 1;
    }
  }

  /** Find the column the target should be in. */
  let colStart = 0;
  let colEnd = C - 1;

  while (colStart < colEnd) {
    const colMid = Math.floor(colStart + (colEnd - colStart) / 2);

    if (matrix[rowStart][colMid] >= target) {
      colEnd = colMid;
    } else {
      colStart = colMid + 1;
    }
  }

  return matrix[rowStart][colStart] === target;
};


/**
 * https://leetcode.com/problems/search-a-2d-matrix/discuss/26220/Don't-treat-it-as-a-2D-matrix-just-treat-it-as-a-sorted-list
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *
 * time: O(log(n) + log(m))
 * space: O(1)
 */
var searchMatrixTreatAsOneDimensionalArray = function(matrix, target) {
  const R = matrix.length;
  const C = matrix[0].length;

  let start = 0;
  let end = R * C;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    const midVal = matrix[Math.floor(mid / C)][mid % C];

    if (midVal > target) {
      end = mid;
    } else if (midVal < target) {
      start = mid + 1;
    } else {
      return true;
    }
  }

  return false;
};

/**
 * https://leetcode.com/problems/search-a-2d-matrix/discuss/133252/Simple-JavaScript-solution
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *
 * time: O(m + n)
 * space: O(1)
 */
var searchMatrixSimple = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let row = 0;
  let col = n - 1;

  while (row < m && col >= 0) {
    let mid = Math.floor(row + (col - row) / 2);

    if (matrix[row][col] < target) {
      // search down
      row += 1;
    } else if (matrix[row][col] > target) {
      // search left
      col -= 1;
    } else {
      return true;
    }
  }

  return false;
};
// @lc code=end

