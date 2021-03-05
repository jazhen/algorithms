// https://leetcode.com/problems/candy-crush/

/*
 * @lc app=leetcode id=723 lang=javascript
 *
 * [723] Candy Crush
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
  const m = board.length;
  const n = board[0].length;
  let crushed = true;

  while (crushed) {
    crushed = false;

    // check three consecutive a row
    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n - 2; col++) {
        const val = Math.abs(board[row][col]);

        if (val !== 0 && Math.abs(board[row][col + 1]) === val && Math.abs(board[row][col + 2]) === val) {
          board[row][col] = -val;
          board[row][col + 1] = -val;
          board[row][col + 2] = -val;

          crushed = true;
        }
      }
    }

    // check three consecutive in a col
    for (let row = 0; row < m - 2; row++) {
      for (let col = 0; col < n; col++) {
        const val = Math.abs(board[row][col]);

        if (val !== 0 && Math.abs(board[row + 1][col]) === val && Math.abs(board[row + 2][col]) === val) {
          board[row][col] = -val;
          board[row + 1][col] = -val;
          board[row + 2][col] = -val;

          crushed = true;
        }
      }
    }

    // remove consectutive vals
    for (let col = 0; col < n; col++) {
      let lastNonNegativeRow = m - 1;
      let numZeroes = 0;

      for (let row = m - 1; row >= 0; row--) {
        if (board[row][col] <= 0) {
          numZeroes += 1;
          continue;
        };

        board[lastNonNegativeRow][col] = board[row][col];
        lastNonNegativeRow -= 1;
      }

      for (let row = 0; row < numZeroes; row++) {
        board[row][col] = 0;
      }
    }
  }

  return board;
};
// @lc code=end

