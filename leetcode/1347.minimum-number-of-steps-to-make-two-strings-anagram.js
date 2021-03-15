// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/

/*
 * @lc app=leetcode id=1347 lang=javascript
 *
 * [1347] Minimum Number of Steps to Make Two Strings Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const freq = {};

  for (const c of s) {
    freq[c] = freq[c] + 1 || 1;
  }

  for (const c of t) {
    freq[c] = freq[c] - 1 || - 1;
  }

  let stepsNeeded = 0;

  // sum the freq of chars
  // where there is an excess of that char in s compared to t
  Object.keys(freq).forEach((c) => {
    if (freq[c] >= 1) stepsNeeded += freq[c];
  })

  return stepsNeeded;
};
// @lc code=end

