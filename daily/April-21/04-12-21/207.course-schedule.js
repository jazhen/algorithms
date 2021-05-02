/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 *
 * time: |V| + |E|, where V is the number of courses and E is the number of prerequisites
 * space: |V| + |E|
 */
 var canFinish = function(numCourses, prerequisites) {
  const sortedOrder = [];

  /* Initialize the graphs */
  const inDegree = new Array(numCourses).fill(0);
  const graph = new Array(numCourses).fill(0).map(() => new Array());

  /* Build the graph */
  prerequisites.forEach((edge) => {
    const course = edge[1];
    const prerequisite = edge[0];

    graph[course].push(prerequisite);
    inDegree[prerequisite] += 1;
  })

  /* Find all sources (vertices with in-degree == 0) */
  const sources = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  /**
   * Add each source to the sortedOrder and
   * subtract one from each of it's children's in-degrees.
   * If a child's in-degrees becomes 0, add it to the sources queue.
   */
  while (sources.length > 0) {
    const course = sources.pop();

    sortedOrder.push(course);

    graph[course].forEach((prerequisite) => {
      inDegree[prerequisite] -= 1;

      if (inDegree[prerequisite] === 0) {
        sources.push(prerequisite);
      }
    })
  }

  /**
   * If sortedOrder doesn't contain all courses,
   * there is a cyclic dependency between tasks.
   */
  return sortedOrder.length === numCourses;
};

// @lc code=end

