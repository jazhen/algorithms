/*
 * @lc app=leetcode id=1832 lang=javascript
 *
 * [1832] Check if the Sentence Is Pangram
 *
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 *
 * time: O(sentence.length)
 * space: O(1)
 */
 var checkIfPangram = function(sentence) {
  const freq = new Array(26).fill(0);

  for (const c of sentence) {
    freq[getAlphaIndex(c)] += 1;
  }

  for (const n of freq) {
    if (n === 0) return false;
  }

  return true;
};

function getAlphaIndex(c) {
  return c.charCodeAt() - 97;
}
// @lc code=end

