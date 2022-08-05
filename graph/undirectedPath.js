/**
 * Write a function, undirectedPath, that takes in an array of edges
 * for an undirected graph and two nodes (nodeA, nodeB).
 * The function should return a boolean indicating whether or not
 * there exists a path between nodeA and nodeB.
 *  n = number of nodes
    e = number edges
    Time: O(e)
    Space: O(n)
 */

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPathIterative(graph, nodeA, nodeB);
};
const hasPathRecursive = (graph, src, dst, visited) => {
  if (src === dst) return true;
  if (visited.has(src)) return false;
  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst, visited)) return true;
  }
  return false;
};
const hasPathIterative = (graph, src, dst) => {
  const stack = [src];
  const visited = new Set([src]);
  while (stack.length) {
    const current = stack.pop();
    if (current === dst) return true;
    for (const neighbour of graph[current]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        stack.push(neighbour);
      }
    }
  }
  return false;
};
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  console.log(`Has path: ${undirectedPath(edges, 'k', 'o')}`);  // -> false 


// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n']
//   ];

//   console.log(`Has path: ${undirectedPath(edges, 'm', 'j')}`);  // -> true
