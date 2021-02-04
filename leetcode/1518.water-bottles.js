// https://leetcode.com/problems/water-bottles/

/*
 * @lc app=leetcode id=1518 lang=javascript
 *
 * [1518] Water Bottles
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let res = 0;
  let empty = 0;

  while (numBottles > 0) {
    res += numBottles;
    empty += numBottles;

    numBottles = Math.floor(empty / numExchange);

    empty %= numExchange;
  }

  return res;
};
// @lc code=end

