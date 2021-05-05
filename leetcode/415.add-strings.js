/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 *
 * time: O(max(n, m)), n = num1.length; m = num2.length
 * space: O(max(n, m))
 */
var addStrings = function(num1, num2) {
  var addStrings = function(num1, num2) {
    let num1Index = num1.length - 1;
    let num2Index = num2.length - 1;
    let carry = 0;
    let ans = '';

    while (num1Index >= 0 || num2Index >= 0) {
      let num1Digit = num1Index >= 0 ? Number(num1[num1Index]) : 0;
      let num2Digit = num2Index >= 0 ? Number(num2[num2Index]) : 0;

      const digitSum = num1Digit + num2Digit + carry;
      ans = (digitSum % 10) + ans;
      carry = Math.floor(digitSum / 10);

      num1Index--;
      num2Index--;
    }

    if (carry > 0) {
      ans = carry + ans;
    }

    return ans;
};
// @lc code=end

