// const arr = [1, 2, 3, 4, 5, 6, 7];
// const search_list = [];

// let root = 0;
// let c = 1;
// search_list.push(arr[0]);
// while (true) {
//   if (c > arr.length) break;
//   search_list.push(arr[c]);
//   if (Math.floor(c / 2) !== root) {
//     // 우측 자식 노드이면
//     root = Math.floor((c - 1) / 2);
//     if (root > arr.length) {
//       // 가장 아래 노드에 다다르면
//       search_list.pop();
//       search_list.pop();
//       search_list.pop();
//     }
//   }
//   c++;
//   console.log(search_list);
// }

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

function dfs(graph, start_node) {
  const visited = [];
  const will_visit = [];

  will_visit.push(start_node);
  while (will_visit.length !== 0) {
    const node = will_visit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      will_visit.push(...graph[node].reverse());
    }
  }
  return visited;
}

const result = dfs(graph, "A");
console.log(result);
