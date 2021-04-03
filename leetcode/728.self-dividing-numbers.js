// https://leetcode.com/problems/self-dividing-numbers/

/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  const ans = [];

  for (let n = left; n <= right; n++) {
    if (isSelfDividing(n)) {
      ans.push(n);
    }
  }

  return ans;
};

function isSelfDividing(n) {
  const digits = n.toString();

  for (let digit of digits) {
    digit = Number(digit);

    if (digit === 0 || n % digit !== 0) return false;
  }

  return true;
}

// def: the number must be divisible by each digit in the number itself
//      the number cannot contain 0

// loop through each number from left to right (inclusive)
//   adding the number if it is self dividing

// to check if self dividing:
//   get each digit
//   loop through each digit
//     return false if the digit is 0
//     also if the number is not divisible by the digit return false
//   return true outside of the loop

// @lc code=end
