/**
 * https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems
 *
 * @param {number[]} array
 * @param {number} target
 * @return {number}
 */
function binarySearch(array, target) {
  /**
   * Correctly initialize the boundary variables start and end
   * to specify search space. Only one rule: set up the boundary to
   * include all possible elements.
   * @example - if the answer can be less than array[start] or greater than array[end]
   * let start = -1;
   * let end = array.length;
   */
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    // Design the condition function.
    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  /**
   * After exiting the while loop, start is the minimal k​
   * satisfying the condition function.
   */
  return nums[start] === target ? start : -1;
}
