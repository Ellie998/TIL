const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.time("선택 정렬 시간 측정");

for (let i in arr) {
  let min_index = i;
  let min;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min_index] > arr[j]) {
      min_index = j;
      min = arr[j];
    }
    const temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = arr[temp];
  }
}

console.timeEnd("선택 정렬 시간 측정");
const arr2 = [];
for (let i = 0; i < 10000; i++) {
  arr2.push(Math.floor(Math.random() * 100));
}
console.time("기본 정렬 라이브러리 성능 측정");

arr2.sort();

console.timeEnd("기본 정렬 라이브러리 성능 측정");
