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
  let lps = [-1, -1]

  // base case for string of length 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    lps = [i, i];
  }

  // base case for string of length 2
  for (let i = 0; i < n; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      lps = [i, i + 1];
    }
  }

  // find palindromes from string of length 3+
  // len: starting index + len characters more
  for (let len = 2; len < n; len++) {
    const leftBound = n - len;

    for (let i = 0; i < leftBound; i++) {
      let j = i + len;

      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;

        if (j - i + 1 > lps[1] - lps[0] + 1) {
          lps = [i, j];
        }
      }
    }
  }

  return s.slice(lps[0], lps[1] + 1);
};

// time: O(n^2)
// space: O(n^2)
// @lc code=end
