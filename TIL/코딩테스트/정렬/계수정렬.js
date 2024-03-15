const array = [
  1, 3, 2, 4, 3, 2, 5, 3, 1, 2, 3, 4, 4, 3, 5, 1, 2, 3, 5, 2, 3, 1, 4, 3, 5, 1,
  2, 1, 1, 1,
];

function counting_sort(list) {
  const count = [];
  for (let i = 0; i < 5; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < list.length; i++) {
    count[array[i] - 1]++;
  }

  // 출력
  for (let i = 0; i < count.length; i++) {
    if (count[i] != 0) {
      for (let j = 0; j < count[i]; j++) {
        console.log(i + 1);
      }
    }
  }
}

counting_sort(array);
