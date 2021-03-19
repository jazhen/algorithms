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
  this.valToIndex = {};
  this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.valToIndex[val] !== undefined) return false;

  this.values.push(val);

  // value is it's index in this.values
  this.valToIndex[val] = this.values.length - 1;

  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.valToIndex[val] === undefined) return false;

  const lastIndex = this.values.length - 1;
  const indexOfVal = this.valToIndex[val];

  // swap the value to be removed and the last value
  [this.values[indexOfVal], this.values[lastIndex]] = [this.values[lastIndex], this.values[indexOfVal]];

  // change the index of the old last value in the hashmap
  this.valToIndex[this.values[lastIndex]] = this.valToIndex[val];

  this.values.pop();
  delete this.valToIndex[val];

  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const randomIndex = Math.floor(this.values.length * Math.random());

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

