import { deepFlat, deepFlat2 } from "./utils";

export {};

function bfsFirst(graph: Array<string[]>, node: string) {
  return graph.reduce((acc: string[], pair: string[]) => {
    const [from, to] = pair;
    if (from === node) acc.push(to);
    return acc;
  }, []);
}

function bfsFirst1(graph: Array<string[]>, node: string): string[] {
  if (graph.length <= 0) return [];

  const [[from, to], ...restGraph] = graph;
  if (from === node) {
    return [to].concat(bfsFirst1(restGraph, node));
  } 

  return bfsFirst1(restGraph, node);
}

function dfsFirst(graph: Array<string[]>, more:string[], seen: string[]): string[] {
  if (more.length <= 0) return seen;

  
  const [head, ...rest] = more;
  if (seen.includes(head)) {
    return dfsFirst(graph, rest, seen);
  } 

  const bfsNodes = bfsFirst(graph, head);
  return dfsFirst(graph, bfsNodes.concat(more), [head, ...seen]);
}

const influences = [
  ['Lisp', 'Smalltalk'],
  ['Lisp', 'Scheme'],
  ['Smalltalk', 'Self'],
  ['Scheme', 'Javascript'],
  ['Scheme', 'Lua'],
  ['Self', 'Lua'],
  ['Self', 'Javascript'],
];

const bfsNodes = bfsFirst1(influences, 'Lisp');
console.log(`bfs ${JSON.stringify(bfsNodes)}`);

const dfsNodes = dfsFirst(influences, ['Lisp'], []);
console.log(`dfs ${JSON.stringify(dfsNodes)}`);


const flatA = deepFlat2([[1, 2], [3, 4]]);
const flatB = deepFlat2([[1, 2], [3, 4, [5, 6, [[7]], 8]]]);
console.log(`flat ${JSON.stringify(flatA)}`);
console.log(`flat ${JSON.stringify(flatB)}`);
