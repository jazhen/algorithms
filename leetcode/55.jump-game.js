/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * time: O(n), n = nums.length
 * space: O(1)
 */
 var canJumpGreedy = function(nums) {
  let farthestJump = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > farthestJump) break;

    farthestJump = Math.max(farthestJump, i + nums[i]);
  }

  return farthestJump >= nums.length - 1;
};


/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * time: O(n^2), n = nums.length
 * space: O(n)
 */
var canJumpDP = function(nums) {
  const dp = new Array(nums.length).fill(false);
  dp[0] = true;

  for (let i = 0; i < nums.length; i++) {
    const furthestJump = Math.min(i + nums[i], nums.length - 1);

    for (let j = i + 1; j <= furthestJump; j++) {
      if (dp[i]) {
        dp[j] = true;
      } else {
        break;
      }
    }
  }

  return dp[nums.length - 1];
};


/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * time: O(n^2), n = nums.length
 * space: O(n)
 */
 var canJumpMemo = function(nums) {
  const target = nums.length - 1;
  const memo = new Map();

  return backtrack(nums, target, memo, 0);
};

function backtrack(nums, target, memo, index) {
  if (index >= target) return true;
  if (memo.has(index)) return memo.get(index);

  for (let jump = 1; jump <= nums[index]; jump++) {

    if (!backtrack(nums, target, memo, index + jump)) continue;

    memo.set(index, true);
    return true;
  }

  memo.set(index, false);
  return false;
}
// @lc code=end

