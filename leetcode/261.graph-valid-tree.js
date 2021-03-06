/*
 * @lc app=leetcode id=261 lang=javascript
 *
 * [261] Graph Valid Tree
 *
 * https://leetcode.com/problems/graph-valid-tree/
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
 var validTree = function(n, edges) {
  const uf = new UnionFind(n);

  for (const [x, y] of edges) {
    if (!uf.union(x, y)) return false;
  }

  return uf.numDisjointSets === 1;
};

class UnionFind {
  /**
   * Create a data structure that stores a collection of disjoint sets.
   *
   * @param {number} size - The initial number of disjoint sets to make.
   */
  constructor(size = 0) {
    this.numDisjointSets = size;
    this.parent = new Array(size);
    this.rank = new Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  /**
   * Add a new disjoint set containing only element x.
   */
  makeSet(x) {
    this.parent[x] = x;
    this.rank[x] = 0;
    this.numDisjointSets += 1;
  }

  /**
   * Return whether the given sets are connected.
   */
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }

  /**
   * Get the root of the element x using path compression.
   * The idea of path compression is to make the found root the parent of x
   * so that we don’t have to traverse all intermediate nodes again.
   */
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  /**
   * Merge two elements into the same disjoint set.
   * The higher rank tree becomes the parent of the tree with a smaller rank.
   * If the ranks are the same, we arbitrarily choose rootX to be the parent
   * and increment its rank.
   */
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += 1;
    }

    this.numDisjointSets -= 1;

    return true;
  }
}
// @lc code=end

