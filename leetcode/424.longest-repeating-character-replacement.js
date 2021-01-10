// https://leetcode.com/problems/longest-repeating-character-replacement/

/*
 * @lc app=leetcode id=424 lang=javascript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  const map = {};
  let most = 0;
  let longest = 0;

  for (let start = 0, end = 0; end < s.length; end++) {
    map[s[end]] = map[s[end]] + 1 || 1;
    most = Math.max(most, map[s[end]]);

    while ((end - start + 1 - most) > k) {
      map[s[start]] -= 1;

      start += 1;
    }

    longest = Math.max(longest, end - start + 1);
  }

  return longest;
};
// @lc code=end
