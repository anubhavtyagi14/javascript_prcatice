const dfsIterativePrint = (graph,source)=>{
    const stack = [source];
    while(stack.length){
        const current = stack.pop();
        console.log(current);
        for (const neighbour of graph[current]) {
            stack.push(neighbour);
        }
    }
}

const dfsRecursivePrint = (graph,source)=>{
    console.log(source);
    for (const neighbour of graph[source]) {
        dfsRecursivePrint(graph,neighbour);
    }
}