// https://leetcode.com/problems/design-underground-system/

/*
 * @lc app=leetcode id=1396 lang=javascript
 *
 * [1396] Design Underground System
 */

// @lc code=start

var UndergroundSystem = function() {
  // save the most recent startStation and checkInTime for a customer id
  this.currentTrip = {};
  // save all the trip times from a startStation to endStation
  // for all customers
  this.completedTrips = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.currentTrip[id] = {
    startStation: stationName,
    checkInTime: t
  }
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const route = this.currentTrip[id].startStation + '=>' + stationName;

  if (!this.completedTrips[route]) {
    this.completedTrips[route] = {
      totalTime: 0,
      count: 0
    };
  }

  this.completedTrips[route].totalTime += t - this.currentTrip[id].checkInTime;
  this.completedTrips[route].count += 1;
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const route = startStation + '=>' + endStation;

  return this.completedTrips[route].totalTime / this.completedTrips[route].count;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end

