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
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Insert the given word into the trie.
   * Time - O(m), where m is the length of the word.
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
   * Time - O(m), where m is the length of the word.
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
