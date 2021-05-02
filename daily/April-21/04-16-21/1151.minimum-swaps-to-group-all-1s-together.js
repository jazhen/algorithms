/*
 * @lc app=leetcode id=1151 lang=javascript
 *
 * [1151] Minimum Swaps to Group All 1's Together
 *
 * https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {number}
 *
 * time: O(data.length)
 * space: O(1)
 */
 var minSwaps = function(data) {
  /** get the window size */
  let numOfOnes = 0;

  for (const n of data) {
    if (n === 1) {
      numOfOnes += 1;
    }
  }

  let leastZeroesInWindowOfSizeOnes = 0;
  let currAmountOfZeroesInWindow = 0;
  let start = 0;
  let end = 0;

  /** build the initial window */
  while (end < numOfOnes) {
    if (data[end++] === 0) {
      leastZeroesInWindowOfSizeOnes += 1;
      currAmountOfZeroesInWindow += 1;
    }
  }

  /** sliding window */
  while (end < data.length) {
    if (data[end++] === 0) {
      currAmountOfZeroesInWindow += 1;
    }

    if (data[start++] === 0) {
      currAmountOfZeroesInWindow -= 1;
    }

    leastZeroesInWindowOfSizeOnes = Math.min(leastZeroesInWindowOfSizeOnes, currAmountOfZeroesInWindow);
  }

  return leastZeroesInWindowOfSizeOnes;
};

/**
 * @param {number[]} data
 * @return {number}
 *
 * time: O(data.length)
 * space: O(1)
 */
var minSwapsAlt = function(data) {
  /** get the window size */
  let numOfOnes = 0;

  for (const n of data) {
    numOfOnes += n;
  }

  let currAmountOfOnesInWindow = 0;
  let start = 0;
  let end = 0;

  /** build the initial window */
  while (end < numOfOnes) {
    currAmountOfOnesInWindow += data[end];
    end += 1;
  }

  let leastZeroesInWindow = end - start + 1 - currAmountOfOnesInWindow;

  /** sliding window */
  while (end < data.length) {
    currAmountOfOnesInWindow += data[end] - data[start];
    start += 1;
    leastZeroesInWindow = Math.min(leastZeroesInWindow, end - start + 1 - currAmountOfOnesInWindow);
    end += 1;
  }

  return leastZeroesInWindow;
};
// @lc code=end

