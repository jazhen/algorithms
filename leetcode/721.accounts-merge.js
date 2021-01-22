// https://leetcode.com/problems/accounts-merge/

/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(-1);

    for (let i = 0; i < size; i++) this.parent[i] = i;
  }

  find(x) {
    while(this.parent[x] !== x) {
      [x, this.parent[x]] = [this.parent[x], this.parent[this.parent[x]]];
    }

    return x;
  }

  union(a, b) {
    a = this.find(a);
    b = this.find(b);

    if (a === b) return;

    this.parent[b] = a;
  }
}

var accountsMerge = function(accounts) {
  // initialize sets on indices
  const uf = new UnionFind(accounts.length);

  const map = {};

  // key: email, value: index
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      const email = accounts[i][j];
      if (map[email] !== undefined) {
        uf.union(map[email], i);
      } else {
        map[email] = i;
      }
    }
  }

  const map2 = {};

  for (let i = 0; i < accounts.length; i++) {
    // get parent index
    const parent = uf.find(i);

    // if parent name doesn't exist in map2
    if (map2[parent] === undefined) {
      // add all emails under it's name
      map2[parent] = accounts[i].slice(1);
    } else {  // if parent name does exist is map2
      // add all emails to of current child under parent
      const child = accounts[i];
      map2[parent] = map2[parent].concat(child.slice(1));
    }
  }

  const result = [];

  // push account name, emails
  Object.keys(map2).forEach((index) => {
    const account = [...new Set(map2[index])];
    result.push([accounts[index][0], ...account.sort()]);
  })

  return result;
};
// @lc code=end
