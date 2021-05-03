/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 *
 * time: O(log_10(n)), since we divided the input by 10 for every iteration.
 * space: O(1)
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  return x === getReversed(x);
};

function getReversed(n) {
  let reversed = 0;

  while (n > 0) {
    reversed = (reversed * 10) + (n % 10);
    n = Math.floor(n / 10);
  }

  return reversed;
}
// @lc code=end

