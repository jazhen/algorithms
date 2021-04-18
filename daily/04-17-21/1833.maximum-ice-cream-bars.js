/*
 * @lc app=leetcode id=1833 lang=javascript
 *
 * [1833] Maximum Ice Cream Bars
 *
 * https://leetcode.com/problems/maximum-ice-cream-bars/
 */

// @lc code=start
/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 *
 * time: O(n log(n)), where n = costs.length
 * space: O(1)
 */
 var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);

  let maxIceCreamPurchasable = 0;

  for (const cost of costs) {
    if (coins < cost) return maxIceCreamPurchasable;

    coins -= cost;
    maxIceCreamPurchasable++;
  }

  return maxIceCreamPurchasable;
};
// @lc code=end

