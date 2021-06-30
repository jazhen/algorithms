/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 *
 * https://leetcode.com/problems/palindromic-substrings/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 *
 * time: O(n^2), n = s.length
 * space: O(n^2)
 */
var countSubstrings = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(false));
  let numPalindromicSubstrings = 0;

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    numPalindromicSubstrings += 1;
  }

  for (let i = 1; i < n; i++) {
    if (s[i - 1] === s[i]) {
      dp[i - 1][i] = true;
      numPalindromicSubstrings += 1;
    }
  }

  for (let len = 2; len < n; len++) {
    const rightBound = n - len;

    for (let i = 0; i < rightBound; i++) {
      const j = i + len;

      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        numPalindromicSubstrings += 1;
      }
    }
  }

  return numPalindromicSubstrings;
};
// @lc code=end
