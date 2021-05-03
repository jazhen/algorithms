/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 *
 * https://leetcode.com/problems/count-binary-substrings/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 *
 * time: O(s.length)
 * space: O(1)
 */
var countBinarySubstrings = function(s) {
  let numBinarySubstrings = 0;

  /**
   * curr, prev refer to the amount of consectutively grouped 0s/1s
   * in the curr and prev substrings
   * */
  let curr = 1;
  let prev = 0;

  /**
   * For substrings with 0s and 1s group consectutively,
   * the amount of binary substrings will the the
   * min amount of 0s and 1s.
   */
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curr += 1;
    } else {
      numBinarySubstrings += Math.min(curr, prev);
      prev = curr;
      curr = 1;
    }
  }

  /** add the last grouping */
  numBinarySubstrings += Math.min(curr, prev);

  return numBinarySubstrings;
};
// @lc code=end

