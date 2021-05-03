/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 *
 * https://leetcode.com/problems/minimum-absolute-difference/
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 *
 * time: O(n • log(n)), n = arr.length
 * space: O(n)
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);

  let minAbsDiff = Infinity;

  for (let i = 1; i < arr.length; i++) {
    minAbsDiff = Math.min(minAbsDiff, Math.abs(arr[i] - arr[i - 1]));
  }

  const ans = [];

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) === minAbsDiff) {
      ans.push([arr[i - 1], arr[i]]);
    }
  }

  return ans;
};
// @lc code=end

