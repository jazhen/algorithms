/*
 * @lc app=leetcode id=1376 lang=javascript
 *
 * [1376] Time Needed to Inform All Employees
 *
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutesBFS = function(n, headID, manager, informTime) {
  const graph = new Array(n).fill(null).map(() => []);

  for (const [employeeId, managerId] of manager.entries()) {
    if (managerId === -1) continue;

    graph[managerId].push(employeeId);
  }

  const queue = [[headID, 0]];
  let maxTime = 0;

  while (queue.length > 0) {
    const [id, time] = queue.shift();
    maxTime = Math.max(maxTime, time);

    for (const subordinateId of graph[id]) {
      queue.push([subordinateId, informTime[id] + time]);
    }
  }

  return maxTime;
};

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutesDFS = function(n, headID, manager, informTime) {
  const graph = new Array(n).fill(null).map(() => []);

  for (const [employeeId, managerId] of manager.entries()) {
    if (managerId === -1) continue;

    graph[managerId].push(employeeId);
  }

  return dfs(graph, informTime, headID);
};

function dfs(graph, informTime, id) {
  let max = 0;

  for (const employeeId of graph[id]) {
    max = Math.max(max, dfs(graph, informTime, employeeId));
  }

  return max + informTime[id];
}
// @lc code=end

