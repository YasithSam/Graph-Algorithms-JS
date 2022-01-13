const undirectedPath=(edges,nodeA,nodeB,visited)=>{
    if(nodeA===nodeB) return true;
    if(visited.has(src)) return false;

    visited.add(src);

    for (let neignour of graph[nodeA]){
        if(undirectedPath(edges,neignour,nodeB)) return true;
    }
    
    return false;
}

const buildGraph = (graph) =>{
    const graph={};

    for(let edge in graph){
        const [a,b]=edge;
        if(!(a in graph)) graph[a]=[];
        if(!(b in graph)) graph[b]=[];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const graph = {
    a: ['c','b'],
    b: ['d'],
    c: ['e']
};
adjacendcyList= buildGraph(graph)
undirectedPath(adjacendcyList,'a','d',new Set())