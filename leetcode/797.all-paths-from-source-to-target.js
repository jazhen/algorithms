// https://leetcode.com/problems/all-paths-from-source-to-target/

/*
 * @lc app=leetcode id=797 lang=javascript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const target = graph.length - 1;
  const paths = [];

  backtrack(graph, target, paths, 0, [0]);
  return paths;
};

function backtrack(graph, target, paths, currNode, path) {
  if (currNode === target) {
    paths.push(path.slice());
  }

  for (const node of graph[currNode]) {
    path.push(node);
    backtrack(graph, target, paths, node, path);
    path.pop();
  }
}
// @lc code=end

