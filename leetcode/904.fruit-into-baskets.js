// https://leetcode.com/problems/fruit-into-baskets/

/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  const fruits = {};
  let max = 0;
  let start = 0;

  for (let end = 0; end < tree.length; end++) {
    fruits[tree[end]] = (fruits[tree[end]] || 0) + 1;

    while (Object.keys(fruits).length > 2) {
      fruits[tree[start]] -= 1;

      if (!fruits[tree[start]]) {
        delete fruits[tree[start]];
      }

      start += 1;
    }

    max = Math.max(max, end - start + 1);
  }

  return max;
};

// set var to keep track of diff amount of fruits to 1
// set var to keep track of max window size with 2 types of fruits
// set up a Object to hold the types of fruits
// set start to 0

// loop from 0 to tree.length - 1
  // increment the fruit in the hash
  // while the hash's size is greater than 2
    // decrement the fruit at start
    // if the fruit's val becomes 0, decrement the fruit counter
    // increment start by 1
  // set the max fruits possible to the max of the curr and end - start + 1

// return max fruits possible

// time: O(n)
// space: O(n)

// @lc code=end

