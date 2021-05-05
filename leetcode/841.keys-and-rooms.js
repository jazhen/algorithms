/*
 * @lc app=leetcode id=841 lang=javascript
 *
 * [841] Keys and Rooms
 *
 * https://leetcode.com/problems/keys-and-rooms/
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const numRooms = rooms.length;
  const visited = new Array(numRooms).fill(false);

  dfs(rooms, visited, 0);

  for (let room = 0; room < numRooms; room++) {
    if (!visited[room]) return false;
  }

  return true;
};

function dfs(rooms, visited, currRoom) {
  if (visited[currRoom]) return;

  visited[currRoom] = true;

  for (const nextRoom of rooms[currRoom]) {
    dfs(rooms, visited, nextRoom);
  }
}
// @lc code=end

