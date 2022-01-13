const hasPath =(graph,src,dst)=>{
    if(src===dst) return true;

    for(let neighbour of graph[src]){
        if(hasPath(graph,neighbour,dst)===true){
            return true;
        }
    }

    return false;
}

const graph = {
    a: ['c','b'],
    b: ['d'],
    c: ['e']
};

hasPath(graph, 'a','d');