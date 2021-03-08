// https://leetcode.com/problems/maximum-units-on-a-truck/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  // sort by numberOfUnitsPerBox desc
  boxTypes.sort((a, b) => b[1] - a[1]);

  let maxUnits = 0;
  let box = 0;

  // two conditions to stop
  // 1. we put the max num of boxes (i.e. truckSize) in the truck
  // 2. we run out of boxes to put in the truck
  while (truckSize > 0 && box < boxTypes.length) {
    maxUnits += boxTypes[box][1];
    boxTypes[box][0] -= 1;
    truckSize -= 1;

    if (boxTypes[box][0] === 0) {
      box += 1;
    }
  }

  return maxUnits;
};
