// https://leetcode.com/problems/combination-sum/

/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function dfs(candidates, result, path, sum, start) {
  if (sum === 0) {
    result.push([...path]);
  } else if (sum > 0) {
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);

      dfs(candidates, result, path, sum - candidates[i], i);

      path.pop();
    }
  }
}

var combinationSum = function(candidates, target) {
  const result = [];

  dfs(candidates, result, [], target, 0);
  return result;
};
// @lc code=end

// []
// [ 2 ]
// [ 2, 2 ]
// [ 2, 2, 2 ]
// [ 2, 2, 2, 2 ]
// [ 2, 2, 2, 3 ]
// [ 2, 2, 2, 6 ]
// [ 2, 2, 2, 7 ]
// [ 2, 2, 3 ]
// [ 2, 2, 6 ]
// [ 2, 2, 7 ]
// [ 2, 3 ]
// [ 2, 3, 3 ]
// [ 2, 3, 6 ]
// [ 2, 3, 7 ]
// [ 2, 6 ]
// [ 2, 7 ]
// [ 3 ]
// [ 3, 3 ]
// [ 3, 3, 3 ]
// [ 3, 3, 6 ]
// [ 3, 3, 7 ]
// [ 3, 6 ]
// [ 3, 7 ]
// [ 6 ]
// [ 6, 6 ]
// [ 6, 7 ]
// [ 7 ]
