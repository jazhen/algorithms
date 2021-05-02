/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 *
 * time: O(prices.length)
 * space: O(1)
 */
var maxProfit = function(prices) {
  let ans = 0;
  let minPrice = Infinity;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    ans = Math.max(ans, prices[i] - minPrice);
  }

  return ans;
};
// @lc code=end

