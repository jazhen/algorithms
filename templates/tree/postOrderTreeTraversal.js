/** Recursive */
function postOrderTreeTraversalRecursive(root) {
  const traversal = [];

  getPostOrderTreeTraversalRecursive(root, traversal);
  return traversal;
}

function getPostOrderTreeTraversalRecursive(node, traversal) {
  if (!node) return;

  if (node.left) {
    getPostOrderTreeTraversalRecursive(node.left, traversal);
  }

  if (node.right) {
    getPostOrderTreeTraversalRecursive(node.right, traversal);
  }

  traversal.push(node.val);
}


/** Iterative */
function postOrderTreeTraversalIterative(root) {

}
