/*
 * @lc app=leetcode id=720 lang=javascript
 *
 * [720] Longest Word in Dictionary
 *
 * https://leetcode.com/problems/longest-word-in-dictionary/
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWordSet = function(words) {
  words.sort();

  const seen = new Set(['']);
  let longest = '';

  for (const word of words) {
    if (seen.has(word.slice(0, word.length - 1))) {
      seen.add(word);

      if (word.length > longest.length) {
        longest = word;
      }
    }
  }

  return longest;
};

/**
 * @param {string[]} words
 * @return {string}
 */
 var longestWordTrie = function(words) {
  const trie = new Trie(words);

  let longest = [''];

  dfs(trie.root, '', longest);
  return longest[0];
};

function dfs(root, path, longest) {
  // case 1: path is the new longest
  // case 2: path is the same length, but lexographically smaller than the current longest
  if (path.length > longest[0].length || path.length === longest[0].length && path < longest[0]) {
    longest[0] = path;
  }

  // keep recursing as long as we each letter is a terminal node
  // i.e. we can build the word one letter at a time
  for (const [letter, child] of Object.entries(root.children)) {
    if (!child.isTerminal) continue;

    dfs(child, path + letter, longest);
  }
}

class TrieNode {
  /**
   * Create a Trie node.
   */
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  /**
   * Create a Trie.
   */
  constructor(words = []) {
    this.root = new TrieNode();

    for (const word of words) {
      this.insert(word);
    }
  }

  /**
   * Insert the given word into the trie.
   * Time - O(word.length)
   * @param {string} word
   */
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

  /**
   * Return whether or not the given word is in the trie.
   * Time - O(word.length)
   * @param {string} word
   * @param {boolean}
   */
  search(word) {
    let node = this.root;

    for (const letter of word) {
      if (!node.children[letter]) {
        return false;
      } else {
        node = node.children[letter];
      }
    }

    return node.isTerminal;
  }
}

// @lc code=end

