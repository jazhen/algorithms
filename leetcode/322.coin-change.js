// https://leetcode.com/problems/coin-change/

/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//   const dp = new Array(amount);

//   function ans(amount) {
//     if (amount < 0) return Infinity;
//     if (amount === 0) return 0;
//     if (dp[amount]) return dp[amount];

//     let best = Infinity;
//     for (const c of coins) {
//       best = Math.min(best, ans(amount - c) + 1);
//     }

//     dp[amount] = best;
//     return best;
//   }

//   const res = ans(amount);
//   return res === Infinity ? -1 : res;
// };

var coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const c of coins) {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], dp[i - c] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
