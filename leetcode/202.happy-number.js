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
const nextSumOfSquaresOfDigits = function(n) {
  let sum = 0;
  const stringN = n.toString();

  for (const digit of stringN) {
    sum += parseInt(digit) ** 2;
  }

  return sum;
}

var isHappy = function(n) {
  let slow = n;
  let fast = n;

  while (true) {
    slow = nextSumOfSquaresOfDigits(slow);
    fast = nextSumOfSquaresOfDigits(nextSumOfSquaresOfDigits(fast));

    if (fast === 1) {
      return true;
    }

    if (slow === fast) {
      return false;
    }
  }
};
// @lc code=end
