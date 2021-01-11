// Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

// Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

// Example 1:

// Input: [3, 1, 5, 12, 2, 11], K = 3
// Output: [5, 12, 11]

// Example 2:

// Input: [5, 12, 11, -1, 12], K = 3
// Output: [12, 11, 12]

class Heap {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  push(el) {
    this.array.push(el);
    this.minHeapify(0);

    return this.array[0];
  }

  pop() {
    if (!this.size()) return null;

    const removed = this.array.shift();
    this.minHeapify(0);
    return removed;
  }

  peek() {
    return this.size() ? this.array[0] : null;
  }

  minHeapify (index) {
    const temp = this.array[index]
    let childIndex

    for (; index * 2 < this.array.length; index = childIndex) {
      childIndex = index * 2

      // Choose the smaller of the two (left, right) children
      if (childIndex != this.array.length - 1 && this.array[childIndex] > this.array[childIndex + 1]) {
        childIndex += 1;
      }

      if (temp > this.array[childIndex]) {
        this.array[index] = this.array[childIndex]
      } else {
        break
      }
    }

    this.array[index] = temp
  }
}

const findKLargestNumbers = function(nums, k) {
  const minHeap = new Heap();

  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  return minHeap;
}

console.log(findKLargestNumbers([3, 1, 5, 12, 2, 11], 3)); // [5, 12, 11]
console.log(findKLargestNumbers([5, 12, 11, -1, 12], 3)); // [12, 11, 12]
