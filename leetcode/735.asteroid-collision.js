// https://leetcode.com/problems/asteroid-collision/

/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    stack.push(asteroid);

    // if right is negative and left is positive
    while (stack.length > 1 && stack[stack.length - 1] < 0 && stack[stack.length - 2] > 0) {
      const right = stack[stack.length - 1];
      const left = stack[stack.length - 2];

      if (Math.abs(right) > Math.abs(left)) {
        // stack.pop(-2) equivalent
        const pop = stack.pop();
        stack[stack.length - 1] = pop;
      } else if (Math.abs(right) < Math.abs(left)) {
        stack.pop();
      } else {
        // same size, remove both
        stack.pop();
        stack.pop();
      }
    }
  }

  return stack;
};
// @lc code=end
