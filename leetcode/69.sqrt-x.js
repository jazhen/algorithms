/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 *
 * time: O(log(x))
 * space: O(1)
 */
 var mySqrt = function(x) {
  let start = 0;
  let end = x + 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (mid ** 2 > x) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start - 1;
};
// @lc code=end

