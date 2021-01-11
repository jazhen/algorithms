// https://leetcode.com/problems/number-of-islands/

/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let result = 0;

  const dfs = function(i, j) {
    // don't explore if not island land area
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] !== '1') {
      return;
    }

    // set to '#' just allows you to revert changes to the grid if needed
    grid[i][j] = '#';

    // explore adjacent grid spaces
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  // for each grid space
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // explore all connected lands of the found land
      if (grid[i][j] === '1') {
        result += 1;
        dfs(i, j);
      }
    }
  }

  return result;
};
// @lc code=end

// dfs(node u)
//   for each node v connected to u :
//     if v is not visited :
//       visited[v] = true
//       dfs(v)


// for each node u:
//   if u is not visited :
//     visited[u] = true
//     connected_component += 1
//     dfs(u)

// n = grid.length and m = grid[0].length
// time: O(mn)
// space: O(mn)
