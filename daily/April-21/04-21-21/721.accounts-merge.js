/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 *
 * https://leetcode.com/problems/accounts-merge/
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 var accountsMerge = function(accounts) {
  const uf = new UnionFind();
  /** save the name associate with each email for fast lookup */
  const emailToName = {};

  for (const [name, ...emails] of accounts) {
    for (const email of emails) {
      /** put each email in it's own set */
      if (!uf.find(email)) {
        uf.makeSet(email);
      }

      emailToName[email] = name;

      /** union the current email with the first email as the parent */
      uf.union(emails[0], email);
    }
  }

  const emails = {};

  for (const email of Object.keys(emailToName)) {
    /** put each email in an object with it's parent as the key */
    const parent = uf.find(email);

    if (!emails[parent]) {
      emails[parent] = [];
    }

    emails[parent].push(email);
  }

  /** return an array with the correct formatting */
  return Object.entries(emails).map(([parent, emails]) => [emailToName[parent], ...emails.sort()]);
};

class UnionFind {
  constructor() {
    this.parent = {};
  }

  makeSet(x) {
    this.parent[x] = x;
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
  }
}

// @lc code=end
