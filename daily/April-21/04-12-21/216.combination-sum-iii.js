/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 *
 * https://leetcode.com/problems/combination-sum-iii/
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
  const ans = [];
  const used = new Array(10).fill(false);

  getCombinations(k, n, ans, used, [], 0, 1);
  return ans;
};

function getCombinations(k, n, ans, used, path, sum, startIndex) {
  if (path.length === k && sum === n) {
    ans.push([...path]);
    return;
  }

  for (let i = startIndex; i <= 9; i++) {
    if (used[i]) continue;

    path.push(i);
    used[i] = true;

    getCombinations(k, n, ans, used, path, sum + i, i);

    path.pop();
    used[i] = false;
  }
}
// @lc code=end

