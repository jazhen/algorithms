/** Recursive */
function preOrderTreeTraversalRecursive(root) {
  const traversal = [];

  getPreOrderTreeTraversalRecursive(root, traversal);
  return traversal;
}

function getPreOrderTreeTraversalRecursive(node, traversal) {
  if (!node) return;

  traversal.push(node.val);

  if (node.left) {
    getPreOrderTreeTraversalRecursive(node.left, traversal);
  }

  if (node.right) {
    getPreOrderTreeTraversalRecursive(node.right, traversal);
  }
}


/** Iterative */
function preOrderTreeTraversalIterative(root) {
  const traversal = [];
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      traversal.push(curr.val);
      curr = curr.left;
    } else {
      const top = stack.pop();
      curr = top.right;
    }
  }

  return traversal;
}
