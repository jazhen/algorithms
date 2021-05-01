/*
 * @lc app=leetcode id=1041 lang=javascript
 *
 * [1041] Robot Bounded In Circle
 *
 * https://leetcode.com/problems/robot-bounded-in-circle/
 */

// @lc code=start
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
  const movement = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dir = 0; // north, east, south, west
  let x = 0;
  let y = 0;

  for (const instruction of instructions) {
    if (instruction === 'R') {
      dir = (dir + 1) % 4;
    } else if (instruction === 'L') {
      dir = (dir + 3) % 4;
    } else {
      x += movement[dir][0];
      y += movement[dir][1];
    }
  }

  // if dir is not north and robot hasn't moved after one cycle,
  // the robot is bounded in a circular area
  return (dir !== 0) || (x === 0 && y === 0);
};
// @lc code=end

