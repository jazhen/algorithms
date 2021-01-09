// https://leetcode.com/problems/3sum-closest/

/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let closest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }

      if (sum > target) {
        k -= 1;
      } else if (sum < target) {
        j += 1;
      } else {
        k -= 1;
        j += 1;
      }
    }
  }

  return closest;
};
// @lc code=end

// time: O(n^2)
// space: O(n)
