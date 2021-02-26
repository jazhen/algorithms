// https://leetcode.com/problems/pascals-triangle/

/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = [];

  if (numRows >= 1) result.push([1]);
  if (numRows >= 2) result.push([1, 1]);

  for (let i = 3; i <= numRows; i++) {
    const newRow = [1];
    const prevRow = result[result.length - 1];

    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1]);
    }

    newRow.push(1);
    result.push(newRow);
  }

  return result;
};
// @lc code=end

