// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// 0 1 2 3 -> null  head 4 5 -> 0 ..

// 0 1 2 3 | 4 5
// length = 6
// k = 2, 8, -4, -10

// get the LL’s length
// get the curr tail
// set the curr tail to the head

// get new tail / new head nodes
// k (positive) -> k= 2: new head is 2nd from the end
// k (negative) -> k= -2: new head is 2nd from the start

// move k - 1 forward
// if (k negative)
//     move abs(k) % length
// if (k pos)
// length - (k % length)


// set head to new tail’s next
// set new tail’s next to null

// return head at end

// time: O(n)
// space: O(1)

function shiftLinkedList(head, k) {
  let length = 1;
  let oldTail = head;

  while (oldTail && oldTail.next) {
    oldTail = oldTail.next; // 5
    length += 1; // 6
  }

  if (k % length === 0) return head;

  oldTail.next = head;

  if (k > 0) {
    k = length - (k % length);
  } else if (k < 0) {
    k = Math.abs(k) % length;
  }

  let newTail = head;
  for (let i = 0; i < k - 1; i++) {
    newTail = newTail.next;
  }

  head = newTail.next;
  newTail.next = null;

  return head;
}
