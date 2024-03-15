const arr = [1, 4, 2, 6, 3, 7, 5, 8, 9, 0];
console.time("timer");
for (let end = 1; end < arr.length; end++) {
  // for (let i = end; i > 0; i--) {
  //   if (arr[i] > arr[i - 1]) {
  //     break;
  //   } else {
  //     const temp = arr[i - 1];
  //     arr[i - 1] = arr[i];
  //     arr[i] = temp;
  //   }
  // }
  for (let i = end - 1; i >= 0; i--) {
    if (arr[i + 1] > arr[i]) {
      break;
    } else {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  // console.log(target);
  console.log(arr);
}
console.timeEnd("timer"); // 0.097ms
