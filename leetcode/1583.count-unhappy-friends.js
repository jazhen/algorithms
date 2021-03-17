// https://leetcode.com/problems/count-unhappy-friends/

/*
 * @lc app=leetcode id=1583 lang=javascript
 *
 * [1583] Count Unhappy Friends
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
  // partner[x] = y, i.e. x is paired with y
  const partner = {};

  for (const [x, y] of pairs) {
    partner[x] = y;
    partner[y] = x;
  }

  // ranking[x][person], i.e. x's ranking of person z (lower is better)
  const ranking = {};

  for (let x = 0; x < preferences.length; x++) {
    for (let rank = 0; rank < preferences[x].length; rank++) {
      const person = preferences[x][rank];

      if (!ranking[x]) {
        ranking[x] = {};
      }

      ranking[x][person] = rank;
    }
  }

  let numUnhappy = 0;

  // check each x, u pairing
  for (let x = 0; x < n; x++) {
    for (const u of preferences[x]) {
      const y = partner[x];
      const v = partner[u];

      if (ranking[x][u] < ranking[x][y] && ranking[u][x] < ranking[u][v]) {
        numUnhappy += 1;
        break;
      }
    }
  }

  return numUnhappy;
};
// @lc code=end

