/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 *
 * https://leetcode.com/problems/backspace-string-compare/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * time: O(s.length + t.length)
 * space: O(1)
 */
 var backspaceCompareTwoPointer = function(s, t) {
  let sIndex = s.length - 1;
  let tIndex = t.length - 1;

  let sBackspaces = 0;
  let tBackspaces = 0;

  while (sIndex >= 0 || tIndex >= 0) {
    if (s[sIndex] === '#') {
      sBackspaces++;
      sIndex--;
      continue;
    }

    if (sBackspaces > 0) {
      sBackspaces--;
      sIndex--;
      continue;
    }

    if (t[tIndex] === '#') {
      tBackspaces++;
      tIndex--;
      continue;
    }

    if (tBackspaces > 0) {
      tBackspaces--;
      tIndex--;
      continue;
    }

    if (s[sIndex] !== t[tIndex]) return false;

    sIndex--;
    tIndex--;
  }

  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * time: O(s.length + t.length)
 * space: O(s.length + t.length)
 */
 var backspaceCompareStack = function(s, t) {
  const parsedS = parse(s);
  const parsedT = parse(t);

  if (parsedS.length !== parsedT.length) return false;

  for (let i = 0; i < parsedS.length; i++) {
    if (parsedS[i] !== parsedT[i]) return false;
  }

  return true;
};

function parse(str) {
  const stack = [];

  for (const c of str) {
    if (c === '#') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack;
}
// @lc code=end

