// https://leetcode.com/problems/circular-array-loop/

/*
 * @lc app=leetcode id=457 lang=javascript
 *
 * [457] Circular Array Loop
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function getNextIndex(nums, direction, currIndex) {
  // check for change in direction
  let nextDirection = nums[currIndex] >= 0;

  if (nextDirection !== direction) {
    return -1;
  }

  // wrap around when nextIndex would be greater than nums.length - 1
  let nextIndex = (currIndex + nums[currIndex]) % nums.length;

  // additional logic to wrap around when nextIndex is negative
  if (nextIndex < 0) {
    nextIndex += nums.length;
  }

  // one element cycle
  if (nextIndex === currIndex) {
    return -1;
  }

  return nextIndex;
}

var circularArrayLoop = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    // get boolean of direction (true: forward, false: backward)
    let direction = nums[i] >= 0;

    // start pointers at the start
    let slow = i;
    let fast = i;

    while (true) {
      slow = getNextIndex(nums, direction, slow);
      fast = getNextIndex(nums, direction, fast);

      // continue follow fast approach if still valid
      if (fast !== - 1) {
        fast = getNextIndex(nums, direction, fast);
      }

      // either a change in direction or a cycle found
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }

    // cycle when slow and fast are the same,
    // but not because one of fast/slow is -1 from a direction change
    if (slow === fast && fast !== -1) {
      return true;
    }
  }

  // after looking through all possibilities, no cycle found
  return false;
};
// @lc code=end

