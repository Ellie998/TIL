const arr = [7, 6, 5, 8, 3, 5, 9, 1];
const sorted = [];
const arr_length = arr.length;

function merge(list, m, middle, n) {
  let i = m;
  let j = middle + 1;
  let k = m;
  // [m~middle], [middle+1,n] 각 배열을 정렬한 뒤에 병합한다.
  // 작은 순서대로 배열에 삽입
  while (i <= middle && j <= n) {
    if (list[i] <= list[j]) {
      sorted[k] = list[i];
      i++;
    } else {
      sorted[k] = list[j];
      j++;
    }
    k++;
  }
  if (i > middle) {
    for (let t = j; t <= n; t++) {
      sorted[k] = list[j];
      k++;
    }
  }
  if (j > middle) {
    for (let t = i; t <= n; t++) {
      sorted[k] = list[t];
      k++;
    }
  }
  // 정렬된 배열 삽입
  for (let t = m; t <= n; t++) {
    list[t] = sorted[t];
  }
}

function merge_sort(list, m, n) {
  if (m < n) {
    const middle = Math.floor((m + n) / 2);
    merge_sort(list, m, middle);
    merge_sort(list, middle + 1, n);
    merge(list, m, middle, n);
  }
}

merge_sort(arr, 0, 7);
console.log(arr);
