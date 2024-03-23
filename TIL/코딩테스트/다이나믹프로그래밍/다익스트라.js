const INF = 99999;
const arr = [
  [0, 2, 5, 1, INF, INF],
  [2, 0, 3, 2, INF, INF],
  [5, 3, 0, 3, 1, 5],
  [1, 2, 3, 0, 1, INF],
  [INF, INF, 1, 1, 0, 2],
  [INF, INF, 5, INF, 2, 0],
];

const d = []; // 최소 거리를 저장한다.
const v = []; // 방문한 노드에 해당하는 인덱스를 true로 변경
const length = 6;

dijkstra(0);
console.log(d);

function dijkstra(start) {
  // start node로부터 각 노드들까지의 거리를 저장한다.
  for (let i = 0; i < length; i++) {
    d[i] = arr[start][i];
  }
  // 방문 표시
  v[start] = true;

  // 방문하지 않은 노드들 중 가장 거리가 적은 노드를 찾는다.
  for (let i = 0; i < length - 2; i++) {
    let current = findSmallDiatance();
    v[current] = true;
    for (let j = 0; j < length; j++) {
      if (!v[j]) {
        if (d[current] + arr[current][j] < d[j])
          d[j] = d[current] + arr[current][j];
      }
    }
  }

  // 노드를 방문하면서 최소 거리가 줄어든다면 그 값으로 저장된 최소 거리를 변경한다.
}
function findSmallDiatance() {
  // 가장 최소 거리를 가지는 index를 return한다.
  let min = INF;
  let mIdx;
  for (let i = 0; i < length; i++) {
    if (d[i] < min && !v[i]) {
      min = d[i];
      mIdx = i;
    }
  }
  return mIdx;
}
