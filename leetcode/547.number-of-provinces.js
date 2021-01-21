// https://leetcode.com/problems/number-of-provinces/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
class UnionFind {
  constructor(size) {
    this.size = size;
    this.parent = [];

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    while (this.parent[x] !== x) {
      [x, this.parent[x]] = [this.parent[x], this.parent[this.parent[x]]];
    }

    return x;
  }

  union(a, b) {
    a = this.find(a);
    b = this.find(b);

    if (a === b) return;

    this.parent[b] = a;
    this.size -= 1;
  }

  query() {
    return this.size;
  }
}

var findCircleNum = function(isConnected) {
  let n = isConnected.length;
  let uf = new UnionFind(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.query();
};
