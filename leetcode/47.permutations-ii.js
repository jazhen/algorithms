// https://leetcode.com/problems/permutations-ii/

/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function dfs(result, visited, nums, path) {
  if (path.length === nums.length) {
    result.push([...path]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;

    // if the curr number is the same as the prev
    // and the prev number as been used already, skip the curr number
    // if(nums[i] === nums[i - 1] && visited[i - 1]) continue;

    path.push(nums[i]);
    visited[i] = true;
    dfs(result, visited, nums, path);
    path.pop();
    visited[i] = false;

    // if the next number is the same as the current, skip the next number
    while (nums[i] === nums[i + 1]) i++;
  }
}

var permuteUnique = function(nums) {
  // sort to get the same numbers together
  nums.sort((a, b) => a - b);

  const result = [];
  const visited = new Array(nums.length).fill(false);


  dfs(result, visited, nums, []);
  return result;
};
// @lc code=end

