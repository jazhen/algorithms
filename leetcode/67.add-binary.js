/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 *
 * time: O(n + m), n = a.length, m = b.length
 * space: O(Max(n, m))
 */
 var addBinary = function(a, b) {
  let aPtr = a.length - 1;
  let bPtr = b.length - 1;
  let carry = 0;
  let sum = '';

  while (aPtr >= 0 || bPtr >= 0 || carry > 0) {
    const aVal = aPtr >= 0 ? Number(a[aPtr]) : 0;
    const bVal = bPtr >= 0 ? Number(b[bPtr]) : 0;

    let digitSum = aVal + bVal + carry;

    if (digitSum < 2) {
      sum = digitSum + sum;
      carry = 0;
    } else {
      sum = (digitSum - 2) + sum;
      carry = 1;
    }

    aPtr -= 1;
    bPtr -= 1;
  }

  return sum;
};
// @lc code=end

