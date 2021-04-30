/*
 * @lc app=leetcode id=259 lang=javascript
 *
 * [259] 3Sum Smaller
 *
 * https://leetcode.com/problems/3sum-smaller/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * time: O(n^2), n = nums.length
 * space: O(1)
 */
var threeSumSmaller = function(nums, target) {
  nums.sort((a,b ) => a - b);
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum < target) {
        ans += k - j;
        j++
      } else {
        k--;
      }
    }
  }

  return ans;
};
// @lc code=end

