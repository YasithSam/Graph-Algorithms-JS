// const depthFirstSearch= (graph,source)=>{
//     const stack = [source];

//     while(stack.length >0){
//         const current = stack.pop();
//         console.log(current)

//         for(let neighbour in graph[current]){
//             stack.push(neighbour);
//         }
//     }
// }

const depthFirstSearch = (graph,source)=>{
    console.log(source);
    for (let neighour of graph[source]){
        depthFirstSearch(graph,neighour);
    }
}

const graph = {
    a: ['c','b'],
    b: ['d'],
    c: ['e']
};

depthFirstSearch(graph, 'a');