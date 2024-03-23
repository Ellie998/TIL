const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

// dfs
/*
const dfs = (here, visited = new Set()) => {
  if (visited.has(here)) return;
  visited.add(here);
  console.log(here);
  graph[here].forEach((e) => dfs(e, visited));
};

dfs(1);
*/

//이분탐색
/*
const a = [1, 2, 3, 4, 5, 6, 7, 8];
const bs = (target) => {
  let lo = 0;
  let hi = a.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (a[mid] === target) {
      console.log(mid);
      return;
    } else if (a[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  console.log(-1);
  return -1;
};
bs(10);
*/

// 피보나치
/*
const fibo = (idx, memo = {}) => {
  if (idx <= 2) return 1;
  if (idx in memo) return memo[idx];
  memo[idx] = fibo(idx - 1, memo) + fibo(idx - 2, memo);
  return memo[idx];
};
const res = fibo(10);
console.log(res);
*/

// 배열 스왑
const arr = [1, 2, 3, 4, 5];
[arr[1], arr[3]] = [arr[3], arr[1]];
console.log(arr);
