/*
 * @lc app=leetcode id=406 lang=javascript
 *
 * [406] Queue Reconstruction by Height
 *
 * https://leetcode.com/problems/queue-reconstruction-by-height/
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 *
 * time: O(n • log(n)), n = people.length
 * space: O(n)
 */
var reconstructQueue = function(people) {
  /**
   * sort people by height, descending
   * sort people of the same height, in ascending order by k-values
   */
   people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

   const queue = [];

   /** place people one by one at the indexes equal to their k-values */
   for (const person of people) {
     queue.splice(person[1], 0, person);
   }

   return queue;
};
// @lc code=end

