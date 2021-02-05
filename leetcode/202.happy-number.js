// https://leetcode.com/problems/happy-number/

/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function sumOfSquareOfDigits(n) {
  let sum = 0;

  while (n > 0) {
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }

  return sum;
}

var isHappy = function(n) {
  let slow = n;
  let fast = n;

  slow = sumOfSquareOfDigits(slow);
  fast = sumOfSquareOfDigits(sumOfSquareOfDigits(fast));

  while (slow !== fast) {
    slow = sumOfSquareOfDigits(slow);
    fast = sumOfSquareOfDigits(sumOfSquareOfDigits(fast));
  }

  return fast === 1 ? true : false;
};
// @lc code=end
