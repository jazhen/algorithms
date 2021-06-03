/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 *
 * https://leetcode.com/problems/delete-and-earn/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarnBruteForce = function(nums) {
  const maxVal = Math.max(...nums);
  const earn = new Array(maxVal + 1).fill(0);

  for (const n of nums) {
    earn[n] += n;
  }

  return getMaxPoints(earn, maxVal);
};

function getMaxPointsBruteForce(earn, val) {
  if (val <= 0) return 0;

  const ignore = getMaxPoints(earn, val - 1);
  const take = getMaxPoints(earn, val - 2) + earn[val];

  return Math.max(ignore, take);
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarnMemo = function(nums) {
  const maxVal = Math.max(...nums);
  const earn = new Array(maxVal + 1).fill(0);
  const memo = new Array(maxVal + 1).fill(null);

  for (const n of nums) {
    earn[n] += n;
  }

  return getMaxPointsMemo(earn, memo, maxVal);
};

function getMaxPointsMemo(earn, memo, val) {
  if (memo[val]) return memo[val];
  if (val <= 0) return 0;

  const ignore = getMaxPointsMemo(earn, memo, val - 1);
  const take = getMaxPointsMemo(earn, memo, val - 2) + earn[val];

  memo[val] = Math.max(ignore, take);

  return memo[val];
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarnDP = function(nums) {
  const maxNum = Math.max(...nums);
  const memo = new Array(maxNum + 1).fill(0);

  for (const num of nums) {
    memo[num] += num;
  }

  for (let i = 0; i < memo.length; i++) {
    const take = memo[i] + (memo[i - 2] ?? 0);
    const ignore = memo[i - 1] ?? 0;

    memo[i] = Math.max(take, ignore);
  }

  return memo[maxNum];
};
// @lc code=end

