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

  // letter is already used
  if (board[i][j] === '') return false;

  // not the correct letter needed; return early
  if (board[i][j] !== word[pos]) return false;

  // found the word
  if (pos === word.length - 1) return true;

  // recursively check 4 directional
  for (const dir of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    // mark the current board position as used
    const temp = board[i][j];
    board[i][j] = '';

    // go deeper
    if (findWord(board, word, m, n, i + dir[0], j + dir[1], pos + 1)) {
      return true;
    }

    // backtrack
    board[i][j] = temp;
  }

}
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const m = board.length;
  const n = board[0].length;
  let pos = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && findWord(board, word, m, n, i, j, pos)) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end

