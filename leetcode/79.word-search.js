// https://leetcode.com/problems/word-search/

/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
function findWord(board, word, m, n, i, j, pos) {
  // out of bounds
  if (i < 0 || i >= m || j < 0 || j >= n) return false;

  // not the correct letter needed
  if (board[i][j] !== word[pos]) return false;

  // found the word
  if (pos === word.length - 1) return true;

  // recursively check 4 directional
  for (const [x, y] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    // mark the current board position as used
    const temp = board[i][j];
    board[i][j] = '';

    // go deeper
    if (findWord(board, word, m, n, i + x, j + y, pos + 1)) {
      return true;
    }

    // backtrack
    board[i][j] = temp;
  }

  return false;
}
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (findWord(board, word, m, n, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end

