// https://leetcode.com/problems/subsets/

/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const subsets = [[]];

  for (const num of nums) {
    for (const set of subsets.slice(0)) {
      subsets.push([...set, num]);
    }
  }

  return subsets;
};
// @lc code=end
