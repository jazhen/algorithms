/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const result = [];
  const used = new Array(candidates.length).fill(false);

  function findCombinations(path, sum, start) {
    if (sum === target) {
      result.push(path.slice(0))
    } else if (sum < target) {
      for (let i = start; i < candidates.length; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        if (used[i]) continue;

        path.push(candidates[i]);
        used[i] = true;
        sum += candidates[i];

        findCombinations(path, sum, i + 1);

        path.pop();
        used[i] = false;
        sum -= candidates[i];
      }
    }
  }

  dfs([], 0, 0);
  return result;
};
// @lc code=end

