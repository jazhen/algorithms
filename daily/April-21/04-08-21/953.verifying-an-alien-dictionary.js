/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 *
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  for (let i = 0; i < words.length - 1; i++) {
    if (!sorted(order, words[i], words[i + 1])) return false;
  }

  return true;
};

function sorted(dict, a, b) {
  const minLen = Math.min(a.length, b.length);

  for (let i = 0; i < minLen; i++) {
    if (dict.indexOf(a[i]) < dict.indexOf(b[i])) return true;
    if (dict.indexOf(a[i]) > dict.indexOf(b[i])) return false;
  }

  return a.length <= b.length;
}

/**
 * time: O(words.length * max(word[i].length))
 * space: O(1)
 */
// @lc code=end

