// https://han-joon-hyeok.github.io/posts/dijkstra-algorithm/

// 0번 노드는 사용하지 않는 빈 노드이다.
// 이는 시작 노드를 1번으로 설정하기 위함이다.
const graph = [
  [], // 사용X
  [
    { to: 2, dist: 1 },
    { to: 4, dist: 2 },
  ],
  [
    { to: 1, dist: 1 },
    { to: 3, dist: 3 },
    { to: 5, dist: 2 },
  ],
  [
    { to: 2, dist: 3 },
    { to: 5, dist: 1 },
  ],
  [
    { to: 1, dist: 2 },
    { to: 5, dist: 2 },
  ],
  [
    { to: 2, dist: 2 },
    { to: 3, dist: 1 },
    { to: 4, dist: 2 },
  ],
];

const distance = new Array(graph.length).fill(Infinity); // [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity]
const queue = [{ to: 1, dist: 0 }];
distance[1] = 0;

while (queue.length) {
  const cur = queue.pop();
  graph[cur.to].forEach((next) => {
    //[ { to: 2, dist: 1 },{ to: 4, dist: 2 },]
    // graph[to]와 연결된 노드들에 접근
    const acc = distance[cur.to] + next.dist;
    if (acc < distance[next.to]) {
      distance[next.to] = acc;

      queue.push(next);
    }
  });
}

console.log(distance);
