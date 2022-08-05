const bfsPrint = (graph,source)=>{
    const queue = [source];
    while(queue.length){
        const current = queue.shift();
        console.log(current);
        for (const neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
}