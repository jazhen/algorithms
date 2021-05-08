/*
 * @lc app=leetcode id=785 lang=javascript
 *
 * [785] Is Graph Bipartite?
 *
 * https://leetcode.com/problems/is-graph-bipartite/
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
 var isBipartite = function(graph) {
  const n = graph.length;
  const colors = new Array(n).fill(null);
  const queue = [];

  for (let node = 0; node < n; node++) {
    if (colors[node] !== null) continue;

    colors[node] = 1;
    queue.push(node);

    while (queue.length > 0) {
      const curr = queue.shift();

      for (const next of graph[curr]) {
        if (colors[next] !== null) {
          if (colors[next] === colors[curr]) return false;
        } else {
          colors[next] = colors[curr] ^ 1;
          queue.push(next);
        }
      }
    }
  }

  return true;
};
// @lc code=end

