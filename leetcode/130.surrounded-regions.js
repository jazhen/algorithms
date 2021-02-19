// https://leetcode.com/problems/surrounded-regions/

/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board.length) return;

  const R = board.length;
  const C = board[0].length;

  // mark 'O' connected to an 'O' on the border as unflippable
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (onBorder(i, j, R, C) && board[i][j] === 'O') {
        markAsUnflippable(board, i, j, R, C);
      }
    }
  }

  // unmark all 'O' connected to 'O' the border
  // everything else should be 'X'
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === '_O') {
        board[i][j] = 'O';
      } else {
        board[i][j] = 'X';
      }
    }
  }
};

function onBorder(i, j, R, C) {
  return i === 0 || j === 0 || i === R - 1 || j === C - 1;
}

function outOfBounds(i, j, R, C) {
  return i < 0 || i >= R || j < 0 || j >= C;
}

function markAsUnflippable(board, i, j, R, C) {
  if (outOfBounds(i, j, R, C)) return;
  if (board[i][j] !== 'O') return;

  board[i][j] = '_O';

  for (const [x, y] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    markAsUnflippable(board, i + x, j + y, R, C);
  }
}
// @lc code=end
