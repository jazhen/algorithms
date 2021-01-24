class UnionFind {
  /**
   * Create a data structure that stores a collection of disjoint set.
   * @example
   * const uf = new UnionFind(input.length);
   * @param {number} size - The initial number of disjoint sets.
   */
  constructor(size) {
    this.parent = new Array(size).fill(-1);
    this.numDisjointSets = size;
  }

  /**
   * Add a new disjoint set containing only element x.
   * Time - O(1)
   * @param {number} index
   * @return {number}
   */
  makeSet(x) {
    this.parent[x] = x;
    this.numDisjointSets += 1;
  }

  /**
   * Get the parent of the element at index x. Uses path compression via path splitting.
   * Path splitting replaces every parent pointer on that path by a pointer to the node's grandparent.
   * Time - O(α(n)) and amortized almost O(1),
   *        where α(n) is the extremely slow-growing inverse Ackermann function.
   * @param {number} x
   * @return {number}
   */
  find(x) {
    while (this.parent[x] !== x) {
      [x, this.parent[x]] = [this.parent[x], this.parent[this.parent[x]]];
    }

    return x;
  }

  /**
   * Merge two elements into the same disjoint set.
   * Time - O(α(n)), where α(n) is the extremely slow-growing inverse Ackermann function.
   * @param {number} x
   * @return {number}
   */
  union(a, b) {
    a = this.find(a);
    b = this.find(b);

    if (a === b) return;

    this.parent[b] = a;
    this.numDisjointSets -= 1;
  }

  /**
   * Get the number of disjoint sets.
   * Time - O(1)
   * @return {number}
   */
  query() {
    return this.numDisjointSets;
  }
}
