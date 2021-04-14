// https://leetcode.com/problems/insert-delete-getrandom-o1/

/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
 var RandomizedSet = function() {
  this.index = {};
  this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.index[val] !== undefined) return false;

  this.values.push(val);
  this.index[val] = this.values.length - 1;

  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.index[val] === undefined) return false;

  const valIndex = this.index[val];
  const lastIndex = this.values.length - 1;

  this.index[this.values[lastIndex]] = valIndex;
  delete this.index[val];

  [this.values[valIndex], this.values[lastIndex]] = [this.values[lastIndex], this.values[valIndex]];

  this.values.pop();

  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(Math.random() * this.values.length);

  return this.values[randomIndex];
};
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

