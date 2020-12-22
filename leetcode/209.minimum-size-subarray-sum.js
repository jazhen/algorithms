// https://leetcode.com/problems/minimum-size-subarray-sum/

/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let minLength = Infinity;
  let currentSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentSum += nums[windowEnd];

    while (currentSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      currentSum -= nums[windowStart];
      windowStart += 1;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
// @lc code=end

// variables: minLength = Infinity, currentSum = 0, windowStart = 0
// for loop from 0 to nums.length, call the iterator windowEnd
//   add the current number to the currentSum
//   while the currentSum >= s
//     set minLength to the min of itself and the currentSum
//     substract the num at windowStart from currentSum
//     increment windowStart

// return minLength === Infinity ? 0 : minLength
