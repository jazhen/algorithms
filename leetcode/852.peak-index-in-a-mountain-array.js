// https://leetcode.com/problems/peak-index-in-a-mountain-array/

/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};
// @lc code=end

// set left to 0
// set right to arr.length - 1

// while left is small than right
//  set mid to the halfway pt, left + Math.floor(right - left) / 2
//  if arr[mid] < arr[mid + 1]
//    set low to mid + 1
//  else
//    set high to mid - 1

// return left when left is equal to right
