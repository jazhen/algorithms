/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 *
 * https://leetcode.com/problems/robot-return-to-origin/
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 *
 * time: O(n), n = moves.length
 * space: O(1)
 */
var judgeCircle = function(moves) {
  let UD = 0;
  let LR = 0;

  for (const move of moves) {
    switch(move) {
      case 'U':
        UD += 1;
        break;
      case 'D':
        UD -= 1;
        break;
      case 'L':
        LR += 1;
        break;
      case 'R':
        LR -= 1;
        break;
      default:
        break;
    }
  }

  return UD === 0 && LR === 0;
};
// @lc code=end

