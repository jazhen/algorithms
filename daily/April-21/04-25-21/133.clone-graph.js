/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 *
 * https://leetcode.com/problems/clone-graph/
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 *
 * time: O(V + E)
 * space: O(V)
 */
var cloneGraph = function(node) {
  if (!node) return null;

  const visited = new Map();
  visited.set(node, new Node(node.val));

  const queue = [node];

  while (queue.length) {
    const nodesInQueue = queue.length;

    for (let i = 0; i < nodesInQueue; i++) {
      const originalNode = queue.shift();
      const cloneNode = visited.get(originalNode);

      for (const neighbor of originalNode.neighbors) {
        if (!visited.has(neighbor)) {
          visited.set(neighbor, new Node(neighbor.val));
          queue.push(neighbor);
        }

        const cloneNeighbor = visited.get(neighbor);
        cloneNode.neighbors.push(cloneNeighbor);
      }
    }
  }

  return visited.get(node);
};
// @lc code=end

