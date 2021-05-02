/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 *
 * https://leetcode.com/problems/course-schedule-ii/
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 *
 * time: O(V + E), V = numCourses, E = prerequisites.length
 * space: O(V + E)
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = new Array(numCourses).fill(null).map(() => []);
  const indegrees = new Array(numCourses).fill(0);

  for (const [course, prereq] of prerequisites) {
    graph[prereq].push(course);
    indegrees[course]++;
  }

  const sources = [];

  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] === 0) {
      sources.push(i);
    }
  }

  const order = [];

  while (sources.length > 0) {
    const prereq = sources.shift();
    order.push(prereq);

    for (const course of graph[prereq]) {
      indegrees[course]--;

      if (indegrees[course] === 0) {
        sources.push(course);
      }
    }
  }

  return order.length === numCourses ? order : [];
};
// @lc code=end

