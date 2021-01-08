// buildings = [3,5,4,2,1]
// direction = "EAST"

// output: [5, 4, 2, 1]
// since 1 < 2 < 4 < 5 but since 3 < 5 it is not included

// input: buildings array, direction string
// output: array of unblocked buildings

// if direction is "EAST" then reverse the buildings array first
// direction "WEST"

// initialize a result array to hold the unblocked buildings
// keep track of tallest building, call it tallest
// initialize it -Infinity

// iterate from 0 to buildings length - 1
	// compare current building height to tallest
  // if current is strictly larger then add current to the result array
  // check if current is the new tallest

// return result array

// time: O(n)
// space: O(n)

function sunsetViews(buildings, direction) {
	const buildingsCopy = buildings.slice(0);

  if (direction === "EAST") { // [1,2,4,5,3]
  	buildingsCopy.reverse();
	}

  const result = [];
  let tallest = -Infinity; // 5

  for (const buildingHeight of buildings) { // 4
  	if (buildingHeight > tallest) {
    	result.push(buildingHeight);
    }

    tallest = Math.max(tallest, buildingHeight);
  }

  if (direction === "EAST") {
  	return result.reverse();
  }

  return result; // [1 2 4 5] [5 4 2 1]
}

// buildings = [3,5,4,2,1]
// direction = "WEST"
// expected output: [3, 5]

// buildings = [3,5,4,2,1]
// direction = "EAST"
// expected: [5, 4, 2, 1]
