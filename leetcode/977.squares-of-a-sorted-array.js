/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const numsLength = nums.length;
  const output = new Array(numsLength).fill(0);
  let outputPtr = numsLength - 1;
  let inputEndPtr = numsLength - 1;
  let inputStartPtr = 0;

  while (inputStartPtr <= inputEndPtr) {
    const squaredStart = nums[inputStartPtr] ** 2;
    const squaredEnd = nums[inputEndPtr] ** 2;

    if (squaredStart >= squaredEnd) {
      output[outputPtr] = squaredStart;
      inputStartPtr += 1;
    } else {
      output[outputPtr] = squaredEnd;
      inputEndPtr -= 1;
    }

    outputPtr -= 1;
  }

  return output;
};
// @lc code=end

// two pointers on input array: start and end (index)
// create a output array of the same size as the input array
// set a pointer on this output array at the end (index)

// while start is less than or equal to end
//   compare the square of the elements at start and end
//   if nums[start]^2 is greater or equal than nums[end]^2
//      put nums[start]^2 in the position of output ptr
//      then increment start ptr
//   else
//     put nums[end]^2 in the position of output ptr
//     then decrement end ptr
//   either way, decrement the output ptr after a insertion
//  return the output array
