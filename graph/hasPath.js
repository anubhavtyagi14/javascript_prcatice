/**
 * Write a function, hasPath, that takes in an object representing
 * the adjacency list of a directed acyclic graph and two nodes (src, dst).
 * The function should return a boolean indicating whether or not there exists
 * a directed path between the source and destination nodes.
 */

/**
 * n = number of nodes
   e = number edges
   Time: O(e)
   Space: O(n)
 */
const hasPathIterative = (graph, src, dst) => {
  const stack = [src];
  while (stack.length) {
    const current = stack.pop();
    if (current === dst) return true;
    for (const neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
  return false;
};
/**
 * n = number of nodes
   e = number edges
   Time: O(e)
   Space: O(n)
 */
const hasPathRecursive = (graph, src, dst) => {
  if (src === dst) return true;
  for (const neighbour of graph[src]) {
    if (hasPathRecursive(graph, neighbour, dst)) return true;
  }
  return false;
};

// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// hasPathRecursive(graph, 'f', 'k'); // true

// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };

// hasPathRecursive(graph, 'f', 'j'); // false