/*
 * @lc app=leetcode id=323 lang=javascript
 *
 * [323] Number of Connected Components in an Undirected Graph
 *
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
  const uf = new UnionFind(n);

  for (const [a, b] of edges) {
    uf.union(a, b);
  }

  return uf.numDisjointSets;
};

class UnionFind {
  constructor(size) {
    this.numDisjointSets = size;
    this.parent = new Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  union(a, b) {
    a = this.find(a);
    b = this.find(b);

    if (a === b) return;

    this.parent[b] = a;
    this.numDisjointSets -= 1;
  }

  find(x) {
    while (x !== this.parent[x]) {
      [x, this.parent[x]] = [this.parent[x], this.parent[this.parent[x]]];
    }

    return x;
  }
}
// @lc code=end

