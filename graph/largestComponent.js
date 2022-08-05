/**
 * Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
 * The function should return the size of the largest connected component in the graph.
 */
const largestComponent = (graph) => {
  const visited = new Set();
  let largest = 0;
  for (const node in graph) {
    const size = exploreIterative(graph, node, visited);
    if (size >= largest) largest = size;
  }
  return largest;
};
const explore = (graph, src, visited) => {
  if (visited.has(+src)) return 0;
  visited.add(+src);
  let size = 1;
  for (const neighbour of graph[src]) {
    size += explore(graph, neighbour, visited);
  }
  return size;
};
const exploreIterative = (graph, src, visited) => {
  if (visited.has(+src)) return 0;
  const stack = [src];
  visited.add(+src);
  let size = 1;
  while (stack.length) {
    const current = stack.pop();
    for (const neighbour of graph[current]) {
      if (!visited.has(+neighbour)) {
        size += 1;
        visited.add(+neighbour);
        stack.push(neighbour);
      }
    }
  }
  return size;
};

// const lComponent = largestComponent({
//   0: ['8', '1', '5'],
//   1: ['0'],
//   5: ['0', '8'],
//   8: ['0', '5'],
//   2: ['3', '4'],
//   3: ['2', '4'],
//   4: ['3', '2'],
// }); // -> 4
// console.log(lComponent);

const lComponent =  largestComponent({
    1: ['2'],
    2: ['1','8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
  }); // -> 6
console.log(lComponent);

