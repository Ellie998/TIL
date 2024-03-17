// https://velog.io/@iameunyu/%ED%81%AC%EB%A3%A8%EC%8A%A4%EC%B9%BC-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-JS-%EA%B5%AC%ED%98%84
// https://blog.naver.com/ndb796/221230994142

// edges[i][0], edges[i][1] 연결된 노드
// edges[i][2] 비용

// 크루스칼 알고리즘 : 최소 비용으로 모든 노드를 연결하는 방법
// 로직
// 1. 비용을 기준으로 오름차순 정렬
// 2. 정렬된 노드들을 차례로 연결
// 2.1. 이미 연결된 노드인지 확인 -> FindParent, isSameParent
// 2.2 이미 열결된 노드가 아니라면 -> 노드 연결 (Union parent)
// 3. 결과 출력

const edges = [
  [1, 2, 2],
  [1, 3, 1],
  [1, 5, 2],
  [2, 5, 7],
  [3, 4, 3],
  [4, 5, 8],
];

const result = kruscal(edges);
console.log(result); //8

/**
 *
 * @param {Array<Array<number>>} edges
 * @returns {number}
 */
function kruscal(edges) {
  const result = [];
  let cost = 0;
  // 오름차순 정렬
  edges.sort((a, b) => {
    return a[2] - b[2];
  });

  // cycle table 생성 [0,1,2,3,4,5]
  const cycleTable = [];
  for (let i = 0; i < edges.length; i++) {
    cycleTable[i] = i;
  }

  // cycle table에 이미 변경이 있다면 pass
  // cycle table가 초기 상태라면 unionParent 실행

  for (let i = 0; i < edges.length; i++) {
    if (!isSameParent(cycleTable, edges[i][0], edges[i][1])) {
      cost += edges[i][2];
      unionParent(cycleTable, edges[i][0], edges[i][1]);
    }
  }
  return cost;
}
/**
 *
 * @param {Array<number>} cycleTable
 * @param {number} a
 * @param {number} b
 * @returns {boolean}
 */
function isSameParent(cycleTable, a, b) {
  const parentOfA = findParent(cycleTable, a);
  const parentOfB = findParent(cycleTable, b);

  if (parentOfA === parentOfB) return true;
  else return false;
}
/**
 *
 * @param {Array<number>} cycleTable
 * @param {number} a
 * @returns {number}
 */
function findParent(cycleTable, a) {
  if (cycleTable[a] === a) return a;
  return (cycleTable[a] = findParent(cycleTable, cycleTable[a]));
}

/**
 *
 * @param {Array<number>} cycleTable
 * @param {number} a
 * @param {number} b
 */
function unionParent(cycleTable, a, b) {
  const parentOfA = findParent(cycleTable, a);
  const parentOfB = findParent(cycleTable, b);
  if (parentOfA > parentOfB) cycleTable[a] = b;
  else cycleTable[b] = a;
}
