/*
 * @lc app=leetcode id=1319 lang=javascript
 *
 * [1319] Number of Operations to Make Network Connected
 *
 * https://leetcode.com/problems/number-of-operations-to-make-network-connected/
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 var makeConnected = function(n, connections) {
  const uf = new UnionFind(n);

  let numRedundantConnections = 0;

  for (const [x, y] of connections) {
    if (!uf.union(x, y)) {
      numRedundantConnections++;
    }
  }

  return uf.numDisjointSets - numRedundantConnections > 1 ? -1 : uf.numDisjointSets - 1;
};

class UnionFind {
  constructor(size) {
    this.numDisjointSets = size;
    this.parent = [];

    for (let x = 0; x < size; x++) {
      this.parent[x] = x;
    }
  }

  makeSet(x) {
    if (!this.find(x)) {
      this.parent[x] = x;
    }
  }

  find(x) {
    while (x !== this.parent[x]) {
      [x, this.parent[x]] = [this.parent[x], this.parent[this.parent[x]]];
    }

    return x;
  }

  union(x, y) {
    x = this.find(x);
    y = this.find(y);

    if (x === y) return false;

    this.parent[y] = x;
    this.numDisjointSets -= 1;
    return true;
  }
}
// @lc code=end

