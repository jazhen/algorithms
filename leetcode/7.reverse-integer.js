/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 *
 * time: O(log_10(x))
 * space: O(1)
 */
 var reverse = function(x) {
  const isNegative = x < 0;
  const reversed = isNegative ? -getReversed(Math.abs(x)) : getReversed(x);
  return is32Bit(reversed) ? reversed : 0;
};

function getReversed(n) {
  let reversed = 0;

  while (n > 0) {
    reversed = (10 * reversed) + (n % 10);
    n = Math.floor(n / 10);
  }

  return reversed;
}

function is32Bit(n) {
  const min = -Math.pow(2, 31);
  const max = Math.pow(2, 31) -1;

  return n >= min && n <= max;
}
// @lc code=end

