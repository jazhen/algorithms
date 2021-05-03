/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  const ans = [];
  const used = new Array(n + 1).fill(false);

  getCombinations(n, k, used, ans, [], 1);
  return ans;
};

function getCombinations(n, k, used, ans, path, start) {
  if (path.length === k) {
    ans.push([...path]);
    return;
  }

  for (let i = start; i <= n; i++) {
    if (used[i]) continue;

    path.push(i);
    used[i] = true;

    getCombinations(n, k, used, ans, path, i);

    path.pop();
    used[i] = false;
  }
}
// @lc code=end

