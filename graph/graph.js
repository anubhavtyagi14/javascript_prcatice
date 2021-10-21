class Graph {
    #adjList;
    constructor(data) {
        if (data) {
            this.#adjList = new Map(Object.entries(data));
        }

    }
    addVertex(node) {
        if (!this.#adjList.get(node)) {
            this.#adjList.set(node, []);
        } else {
            console.error(`${node} already exists`);
        }
    }
    addEdge(source, destination) {
        const sourceNode = this.#adjList.get(source);
        const destNode = this.#adjList.get(destination);
        if (sourceNode) {
            if (destNode) {
                sourceNode.push(destination);
            } else {
                console.error(`${destNode} doesn't exists`);
            }
        } else {
            console.error(`${node} doesn't exists`);
        }
    }
    dfsRecursive(source, destination, result = [], visited = new Set()) {
        visited.add(source);
        const neighbors = this.#adjList.get(source);
        neighbors.forEach(neighbor => {
            if (neighbor.key === destination) {
                result.push(neighbor.weight);
                return;
            }
            if (!visited.has(neighbor.key)) {
                this.dfsRecursive(neighbor.key, destination, visited);
            }
        });
    }

    dfsIterative(source, destination) {
        const result = [];
        const visited = new Set();
        visited.add(source);
        const stack = [source];
        while (stack.length) {
            const start = stack.pop();
            const neighbors = this.#adjList.get(start);
            neighbors.forEach(neighbor => {
                if (neighbor.key === destination) {
                    result.push(neighbor.weight);
                }
                if (!visited.has(neighbor.key)) {
                    visited.add(neighbor.key);
                    stack.push(neighbor.key);
                }
            });
        }
        return result;
    }
    bfs(source, destination) {
        const result = [];
        const visited = new Set();
        const queue = [source];
        while (queue.length) {
            const start = queue.shift();
            const neighbors = this.#adjList.get(start);
            neighbors.forEach(neighbor => {
                if (neighbor.key === destination) {
                    result.push(neighbor.weight);
                }
                if (!visited.has(neighbor.key)) {
                    visited.add(neighbor.key);
                    queue.push(neighbor.key);
                }
            });
        }
        return result;
    }
}


const graph = new Graph({
    "ABC": [{ key: "BCD", weight: "101" }, { key: "XYZ", weight: "303" }],
    "BCD": [{ key: "CDE", weight: "101" }, { key: "DEF", weight: "202" }],
    "CDE": [{ key: "DEF", weight: "101" }, { key: "EFG", weight: "404" }],
    "DEF": [{ key: "CDE", weight: "404" }, { key: "EFG", weight: "101" }],
    "EFG": [],
    "XYZ": [{ key: "WER", weight: "303" }, { key: "DEF", weight: "404" }],
    "WER": [{ key: "SDF", weight: "303" }],
    "SDF": [{ key: "GHJ", weight: "303" }],
    "GHJ": [],

});
// console.log(graph.bfs("BCD", "EFG"));
// console.log(graph.dfsIterative("BCD", "EFG"));
// const result = [];
// graph.dfsRecursive("BCD", "EFG", result);
// console.log(result);