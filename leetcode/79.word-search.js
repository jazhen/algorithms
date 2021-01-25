// https://leetcode.com/problems/word-search/

/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const letter of word) {
      if (!node.children[letter]) {
        node.children[letter] = new TrieNode();
      }

      node = node.children[letter];
    }

    node.isTerminal = true;
  }
}

function dfs(node, board, visited, i, j) {
  // out of bounds
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;

  // the node exists
  if (!node.children[board[i][j]]) return false;

  // not a duplicate
  if (visited[i * board[0].length + j]) return false;

  // return true if the word is found
  if (node.children[board[i][j]].isTerminal) return true;

  // build up
  visited[i * board[0].length + j] = true;

  // visited neighbors
  if (dfs(node.children[board[i][j]], board, visited, i - 1, j)
      || dfs(node.children[board[i][j]], board, visited, i + 1, j)
      || dfs(node.children[board[i][j]], board, visited, i, j - 1)
      || dfs(node.children[board[i][j]], board, visited, i, j + 1)) {
        return true;
      }

  // backtrack
  visited[i * board[0].length + j] = false;

  // return false is word is not found
  return false;
}

var exist = function(board, word) {
  const trie = new Trie();
  trie.insert(word);

  const visited = new Array(board.length * board[0].length).fill(false);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // start when the letter is the first letter of word
      if (trie.root.children[board[i][j]] && dfs(trie.root, board, visited, i, j)) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end
