// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
// Example:
// Input:
// asteroids = [1, 2, 3,-3,4,-2]
// Output = [1, 2, 4] -> missing [3, -3, -2]

// 1 2 3 -3 4 -2
// -3 -2 | 1 2 3 4

// []


// [1,1,1,1,-5] =>

// Absolute val -> size e.g. |-3| = 3 size, -3 -> moving left

// Collision when + and - asteroid meet

// Check smallest and largest
// -3 4 -> -3 ex
// -2 3 -> -2 ex

// [1, 2, ]

// Init a output array to []
// Start at index 0, while index is less than size of input array
// If the number at the index is positive
//     Check the number to the index + 1

// B . If the number at the index is negative
//     Check the number to the index - 1

//     Both a, b
//     Then check the numbers at the index
//     If they are the same direction,
//         Push the current number to the output
//     If they are diff directions, compare sizes (abs values of each)
//         If left > right: remove the right number, push curr to output, increment index
//         If left < right: remove the left number
//         If left == right: remove both, increment index

// Increment the index

// ----

// index is 0
// time:
// space:

// =============================================================
// [1, 2, 3,-3,4,-2]
// The only case where there is a collision is if there is a +ve value on the left and a -Ve value on the right

// looping value needs to be negative
// top of stack needs to be positive for there to be a collision


// Function asteroids(arr) {
//     let stack =[arr[0]]

//     for(let i =1; i < arr.length;i++){
//         if(arr[i] > 0) stack.push(arr[i])
//         else{
//             if(stack[stack.length-1] < 0)stack.push(arr[i])
//     else{
//       while(stack.length && stack[stack.length-1] >0){
//           posVal = stack.pop()
//           negVal = arr[i]

//           if(posVal > Math.abs(negVal)){
//               stack.push(posVal)
//               break
//           }else if (posVal === Math.abs(negVal)){
//               break
//           }else{
//               if(stack.length === 0){
//               stack.push(negVal)
//               break
//           }
//               continue
//           }
//         }
//       }
//     }
//   }
//   return stack;
// }
