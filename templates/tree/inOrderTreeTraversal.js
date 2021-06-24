/** Recursive */
function inOrderTreeTraversalRecursive(root) {
  const traversal = [];

  getInOrderTreeTraversal(root, traversal);
  return traversal;
}

function getInOrderTreeTraversal(node, traversal) {
  if (!node) return;

  if (node.left) {
    getInOrderTreeTraversal(node.left, traversal);
  }

  traversal.push(node.val);

  if (node.right) {
    getInOrderTreeTraversal(node.right, traversal);
  }
}


/** Iterative */
function inOrderTreeTraversalIterative(root) {
  const traversal = [];
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      const top = stack.pop();
      traversal.push(top.val);
      curr = top.right;
    }
  }

  return traversal;
}
