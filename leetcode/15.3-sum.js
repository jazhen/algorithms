// https://leetcode.com/problems/3sum/

/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const twoSum = function(nums, i, target) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[j] + nums[k];

      if (sum > target) {
        k -= 1;
      } else if (sum < target) {
        j += 1;
      } else {
        triplets.push([nums[i], nums[j], nums[k]]);
        j += 1;
        k -= 1;

        while (nums[j] === nums[j - 1]) {
          j += 1;
        }

        while (nums[k] === nums[k + 1]) {
          k -= 1;
        }
      }
    }
  }

  if (nums.length < 3) return [];

  nums = nums.sort((a, b) => a - b);
  const triplets = [];
  const target = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    twoSum(nums, i, target - nums[i]);
  }

  return triplets;
};
// @lc code=end

