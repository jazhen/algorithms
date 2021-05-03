/*
 * @lc app=leetcode id=881 lang=javascript
 *
 * [881] Boats to Save People
 *
 * https://leetcode.com/problems/boats-to-save-people/
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 *
 * time: O(n • log(n)), n = people.length
 * space: O(1)
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b);

  let start = 0;
  let end = people.length - 1;

  let numBoats = 0;

  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      start++;
    }

    end--;
    numBoats++;
  }

  return numBoats;
};
// @lc code=end

