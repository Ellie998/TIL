function findParent(parent, x) {
  if ((parent[x] = x)) return x;
  else return (parent[x] = findParent(parent, parent[x]));
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
  const parent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
