/*
 * @lc app=leetcode id=1629 lang=javascript
 *
 * [1629] Slowest Key
 *
 * https://leetcode.com/problems/slowest-key/
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 *
 * time: O(n), n = keysPressed.length
 * space: O(1)
 */
var slowestKey = function(releaseTimes, keysPressed) {
  let key = keysPressed[0];
  let time = releaseTimes[0];

  for (let i = 0; i < releaseTimes.length; i++) {
    if (releaseTimes[i] - releaseTimes[i - 1] > time) {
      key = keysPressed[i];
      time = releaseTimes[i] - releaseTimes[i - 1];
    } else if (releaseTimes[i] - releaseTimes[i - 1] === time) {
      if (keysPressed[i] > key) {
        key = keysPressed[i];
      }
    }
  }

  return key;
};
// @lc code=end

