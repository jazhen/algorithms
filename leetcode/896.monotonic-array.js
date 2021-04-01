// https://leetcode.com/problems/monotonic-array/

/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
 var isMonotonic = function(A) {
  let isMonoInc = true;
  let isMonoDec = true;

  for (let i = 1; i < A.length; i++) {
    if (A[i] < A[i - 1]) isMonoInc = false;
    if (A[i] > A[i - 1]) isMonoDec = false;
  }

  return isMonoInc || isMonoDec;
};

/**
 * set isMonoInc and isMonoDec to true initially
 * loop through array A
 * if next < prev: isMonoInc must be false
 * if next > prev: isMonoDec must be false

 * return isMonoInc || isMonoDec;
 */
// @lc code=end

