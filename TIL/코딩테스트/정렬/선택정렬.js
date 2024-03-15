const arr = [1, 4, 2, 6, 3, 7, 5, 8, 9, 0];
console.time("timer");
for (let i = 0; i < arr.length; i++) {
  let min_index = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min_index] > arr[j]) {
      min_index = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[min_index];
  arr[min_index] = temp;
}
console.timeEnd("timer"); // 0.097ms
