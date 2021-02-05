// https://leetcode.com/problems/longest-palindromic-substring/

/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let n = s.length;
  const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
  let lps = '';

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    lps = s[i];
  }

  for (let i = 0; i < n; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      lps = s.slice(i, i + 2);
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j < n; j++) {
      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
        if ((j - i + 1) > lps.length) {
          lps = s.slice(i, j + 1);
        }
      }
    }
  }

  return lps;
};
// @lc code=end
