function findParent(parent, x) {
  if (parent[x] === x) return x;
  return (parent[x] = findParent(parent, parent[x]));
}

function isSameParent(parent, a, b) {
  const parentOfA = findParent(parent, a);
  const parentOfB = findParent(parent, b);
  if (parentOfA === parentOfB) return true;
  else return false;
}

function unionParent(parent, a, b) {
  const parentOfA = findParent(parent, a);
  const parentOfB = findParent(parent, b);

  if (parentOfA < parentOfB) parent[b] = a;
  else parent[a] = b;
}

function unionFind() {
  const parent = [];
  for (let i = 0; i < 11; i++) {
    parent[i] = i;
  }

  unionParent(parent, 1, 2);
  unionParent(parent, 2, 3);
  unionParent(parent, 3, 4);
  unionParent(parent, 5, 6);
  unionParent(parent, 6, 7);
  unionParent(parent, 7, 8);
  console.log("1과 3는 연결되었나요?", isSameParent(parent, 1, 3));
  console.log("1과 5는 연결되었나요?", isSameParent(parent, 1, 5));
  unionParent(parent, 1, 5);
  console.log("1과 5는 연결되었나요?", isSameParent(parent, 1, 5));
  return parent;
}

const result = unionFind();
console.log(result);

// https://blog.naver.com/ndb796/221230967614
// 실수한 점 : ===을 =으로 표기하고 로직 문제만 고민했음
// 개선할 점 : 에러가 발생하면 로직을 확인하기 이전에 문법을 잘 작성했는가 먼저 꼼꼼하게 살펴보자.
