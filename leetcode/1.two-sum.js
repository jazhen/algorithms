// https://leetcode.com/problems/two-sum/

/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    if (map.has(difference)) {
      return [map.get(difference), i];
    }

    map.set(nums[i], i);
  }
};
// @lc code=end

// use a map to hold they key nums[i] with the value i
// for i from 0 to nums.length
// calc difference of target and nums[i]
// if the difference is a key in the map, return [val of difference, i]
// add the current index to the map

// time: O(n)
// space: O(n)
