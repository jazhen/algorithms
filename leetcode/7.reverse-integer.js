// https://leetcode.com/problems/reverse-integer/

/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let stringX = x.toString();
  let reversedX;

  if (stringX[0] === '-') {
    reversedX = '-' + stringX.slice(1).split('').reverse().join('');
  } else {
    reversedX = stringX.split('').reverse().join('');
  }

  reversedX = parseInt(reversedX, 10);

  if (reversedX < (-2) ** 31 || reversedX > 2 ** 31) {
    return 0;
  }

  return reversedX;
};
// @lc code=end

