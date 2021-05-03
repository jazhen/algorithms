/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 *
 * https://leetcode.com/problems/is-subsequence/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * time: O(n), n = t.length
 * space: O(1)
 */
var isSubsequence = function(s, t) {
  let pS = 0;
  let pT = 0;

  while (pT < t.length && pS < s.length) {
    if (t[pT] === s[pS]) {
      pS++;
    }

    pT++;
  }

  return pS === s.length;
};
// @lc code=end

