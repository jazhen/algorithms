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
  const n = s.length;
  const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
  let lps = ''

  // base case for string of length 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    lps = s.slice(i, i + 1);
  }

  // base case for string of length 2
  for (let i = 0; i < n; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      lps = s.slice(i, i + 2);
    }
  }

  // find palindromes from string of length 3+
  for (let len = 2; len < n; len++) {
    const leftBound = n - len + 1;

    for (let i = 0; i < leftBound; i++) {
      let j = i + len;

      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;

        if (j - i + 1 > lps.length) {
          lps = s.slice(i, j + 1);
        }
      }
    }
  }

  return lps;
};

// time: O(n^2)
// space: O(n^2)
// @lc code=end
