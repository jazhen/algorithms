// https://leetcode.com/problems/degree-of-an-array/

/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let freq = {};

  for (let num of nums) {
    freq[num] = freq[num] + 1 || 1;
  }

  const degree = Math.max(...Object.values(freq));

  freq = {};
  let ans = Infinity;

  for (let start = 0, end = 0; end < nums.length; end++) {
    freq[nums[end]] = freq[nums[end]] + 1 || 1;

    while (freq[nums[end]] === degree) {
      ans = Math.min(ans, end - start + 1);
      freq[nums[start++]] -= 1;
    }
  }

  return ans;
};
// @lc code=end
