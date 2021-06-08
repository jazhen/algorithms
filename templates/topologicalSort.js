/**
 * @param {Number} vertices - The amount of vertices.
 * @param {Number[]} edges - The edges in the form [parent, child].
 * @returns
 */
function topologicalSort(vertices, edges) {
  const sortedOrder = [];

  if (vertices <= 0) {
    return sortedOrder;
  }

  /* Initialize the graphs. */
  const inDegree = new Array(vertices).fill(0);
  const graph = new Array(vertices).fill(0).map(() => new Array());

  /* Build the graph */
  edges.forEach((edge) => {
    const parent = edge[0];
    const child = edge[1];

    graph[parent].push(child);
    inDegree[child] += 1;
  })

  /* Find all sources (vertices with in-degree == 0). */
  const sources = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  /**
   * Add each source to the sortedOrder and
   * subtract one from each of it's children's in-degrees.
   * If a child's in-degrees becomes 0, add it to the sources queue.
   */
  while (sources.length > 0) {
    const vertex = sources.pop();

    sortedOrder.push(vertex);

    graph[vertex].forEach((child) => {
      inDegree[child] -= 1;

      if (inDegree[child] === 0) {
        sources.push(child);
      }
    })
  }

  /** Topological Sort is not possible if the graph has a cycle. */
  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
};
