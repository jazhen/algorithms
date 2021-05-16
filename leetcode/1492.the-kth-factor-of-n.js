/*
 * @lc app=leetcode id=1492 lang=javascript
 *
 * [1492] The kth Factor of n
 *
 * https://leetcode.com/problems/the-kth-factor-of-n/
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthFactor = function(n, k) {
  for (let divisor = 1; divisor <= n; divisor++) {
    if (n % divisor !== 0) continue;

    if (--k === 0) return divisor;
  }

  return -1;
};
// @lc code=end

