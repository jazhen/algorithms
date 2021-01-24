// https://leetcode.com/problems/longest-word-in-dictionary/

/*
 * @lc app=leetcode id=720 lang=javascript
 *
 * [720] Longest Word in Dictionary
 */

// @lc code=start
class TrieNode {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();

    for (const word of words) {
      this.insert(word);
    }
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

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  const trie = new Trie(words);
  let longest = '';

  function dfs(node, path) {
    if (path.length > longest.length) {
      longest = path;
    } else if (path.length === longest.length) {
      if (path < longest) {
        longest = path;
      }
    }

    const children = node.children;
    if (!Object.keys(children).length) return;

    for (const childVal of Object.keys(children)) {
      const childNode = children[childVal];

      if (!childNode.isTerminal) continue;

      dfs(children[childVal], path + childVal);
    }
  }

  dfs(trie.root, '');
  return longest;
};

// time: O(n * m)
// space: O(n * m)
// @lc code=end
