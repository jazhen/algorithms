/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 *
 * https://leetcode.com/problems/time-based-key-value-store/
 */

// @lc code=start
/**
 * Initialize your data structure here.
 *
 * space: O(# timestamp === any and all inserts)
 */
 var TimeMap = function() {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 *
 * time: O(1)
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = [];
  }

  this.map[key].push({
    timestamp,
    value,
  });
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 *
 * time: O(log(this.map[key].length))
 */
TimeMap.prototype.get = function(key, timestamp) {
  const valuesAtKey = this.map[key];

  let start = 0;
  let end = valuesAtKey.length;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (valuesAtKey[mid].timestamp > timestamp) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start === 0 ? '' : valuesAtKey[start - 1].value;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

