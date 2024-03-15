const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D", "H", "I"],
  G: ["E", "J", "K"],
  H: ["F", "L"],
  I: ["F", "M"],
  J: ["G", "N"],
  K: ["G", "O"],
  L: ["H"],
  M: ["I", "P"],
  N: ["J"],
  O: ["K"],
  P: ["M"],
};
function bfs(graph, start_node) {
  const visited = [];
  const will_visit = [];

  will_visit.push(start_node);
  while (will_visit.length !== 0) {
    const node = will_visit.shift();
    const nodes = [...graph[node]];
    if (node !== start_node) nodes.shift();
    will_visit.push(...nodes);
    if (!visited.includes(node)) {
      visited.push(node);
    }
  }
  return visited;
}

const result = bfs(graph, "A");
console.log(result);
