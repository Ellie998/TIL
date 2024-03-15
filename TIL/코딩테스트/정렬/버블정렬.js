const arr = [1, 4, 2, 6, 3, 7, 5, 8, 9, 0];

console.time("timer");
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let min = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = min;
    }
  }
}
console.timeEnd("timer"); //0.201ms

console.log(arr);
