/** Recursive */
function levelOrderTraversalRecursive(root) {
  const traversal = [];

  getLevelOrderTraversal(traversal, root, 0);
  return traversal;
};

function getLevelOrderTraversal(traversal, node, level) {
  if (!node) return;

  if (traversal.length === level) {
    traversal.push([]);
  }

  traversal[level].push(node.val);

  if (node.left) {
    getLevelOrderTraversal(traversal, node.left, level + 1);
  }

  if (node.right) {
    getLevelOrderTraversal(traversal, node.right, level + 1);
  }
}


/** Iterative */
var levelOrderTraversalIterative = function(root) {
  if (!root) return [];

  const traversal = [];
  const queue = [root];

  while (queue.length) {
    const nodesInLevel = queue.length;
    const level = [];

    for (let i = 0; i < nodesInLevel; i++) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    traversal.push(level);
  }

  return traversal;
};
