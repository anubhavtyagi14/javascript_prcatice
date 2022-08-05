/**
 * Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
 * W represents water and L represents land. 
 * The function should return the size of the smallest island. 
 * An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
 */

const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = explore(grid, r, c, visited);
      if (size < min && size > 0) min = size;
    }
  }
  return min;
};

const explore = (grid, row, col, visited) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds || grid[row][col] === 'W') return 0;
  const key = `${row},${col}`;
  if (visited.has(key)) return 0;
  visited.add(key);
  let size = 1;
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row, col - 1, visited);
  size += explore(grid, row, col + 1, visited);

  return size;
};
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid)); // -> 2
