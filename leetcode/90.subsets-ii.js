// https://leetcode.com/problems/subsets-ii/

/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort();
  const subsets = [[]];
  let start = 0;
  let end = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      start = end;
    } else {
      start = 0;
    }

    end = subsets.length;

    for (let j = start; j < end; j++) {
      subsets.push([...subsets[j], nums[i]]);
    }
  }

  return subsets;
};
// @lc code=end

// first sort the input array
// set the subset array to [[]]
// init start, end to 0

// for i from 0 to nums length
//  if current num and prev num are not the are set start to end
//  else set start to 0
//  set end to subset's length

// for j from start to end
//  push the num to the subset at j
//  and push the resulting array to the list of subsets
