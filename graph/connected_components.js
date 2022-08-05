/**
 * Write a function, connectedComponentsCount, that takes in the adjacency list
 * of an undirected graph.
 * The function should return the number of connected components within the graph.
 */
const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();
  for (let node in graph) {
    if (exploreIterative(graph, node, visited)) {
      count += 1;
    }
  }
  return count;
};
const explore = (graph, src, visited) => {
  if (visited.has(+src)) return false;
  visited.add(+src);
  for (let neighbour of graph[src]) {
    explore(graph, neighbour, visited);
  }
  return true;
};
const exploreIterative = (graph, src, visited) => {
  if (visited.has(+src)) return false;
  const stack = [src];
  visited.add(+src);
  while (stack.length) {
    const current = stack.pop();
    for (const neighbour of graph[current]) {
      if (!visited.has(+neighbour)) {
        visited.add(+neighbour);
        stack.push(neighbour);
      }
    }
  }
  return true;
};

// const finalcount = connectedComponentsCount({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2],
// }); // -> 2
// console.log(finalcount);

// const finalcount = connectedComponentsCount({
//   3: [],
//   4: [6],
//   6: [4, 5, 7, 8],
//   8: [6],
//   7: [6],
//   5: [6],
//   1: [2],
//   2: [1],
// }); // -> 3
// console.log(finalcount);
const finalcount = connectedComponentsCount({}); // -> 0
console.log(finalcount);
