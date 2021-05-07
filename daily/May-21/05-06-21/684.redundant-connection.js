/*
 * @lc app=leetcode id=684 lang=javascript
 *
 * [684] Redundant Connection
 *
 * https://leetcode.com/problems/redundant-connection/
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
  const uf = new UnionFind(edges.length + 1);

  for (const [x, y] of edges) {
    if (!uf.union(x, y)) return [x, y];
  }
};

class UnionFind {
  /**
   * Create a data structure that stores a collection of disjoint sets.
   *
   * @param {number} size - The initial number of disjoint sets.
   */
  constructor(size) {
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
   *
   * @param {number} index
   * @return {number}
   */
  makeSet(x) {
    this.parent[x] = x;
    this.rank[x] = 0;
    this.numDisjointSets += 1;
  }

  /**
   * Return whether the given sets are connected.
   *
   * @param {number} x
   * @param {number} y
   * @return {boolean}
   */
  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }

  /**
   * Get the root of the element x using path compression.
   * The idea of path compression is to make the found root the parent of x
   * so that we don’t have to traverse all intermediate nodes again.
   *
   * Time -
   *   Naive: O(n) worst case
   *   Path compression: O(log(n)) worst case
   *
   * @example
   *
   *             9
   *         /   |   \
   *        4    5    6
   *      /   \     /   \
   *     0     3   7     8
   *         /   \
   *        1     2
   *
   *
   *           find(3)
   *
   *
   *              9
   *        /  |    |    \
   *       /   |    |     \
   *      4    5    6      3
   *    /          / \    / \
   *   0          7   8  1   2
   *
   * @param {number} x
   * @return {number}
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
   *
   * Time -
   *   Naive: O(n) worst case, O(log(n)) average case
   *   Union by rank: O(log(n)) worst case
   *
   * @param {number} x
   * @param {number} y
   * @return {boolean}
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

