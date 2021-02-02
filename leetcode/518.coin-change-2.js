// https://leetcode.com/problems/coin-change-2/

/*
 * @lc app=leetcode id=518 lang=javascript
 *
 * [518] Coin Change 2
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const c of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i - c >= 0) {
        dp[i] += dp[i - c];
      }
    }
  }

  return dp[amount];
};
// @lc code=end
