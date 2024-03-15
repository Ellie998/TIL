console.time("start");
function main() {
  const arr = [1, 4, 2, 6, 3, 7, 5, 8, 0];
  console.log(arr);
  quick_sort(arr, 0, arr.length - 1);
  console.log(arr);
}
main();
console.timeEnd("start");

function partition(list, l, r) {
  const pivotIndex = l;
  const pivot = list[pivotIndex];
  let i = l + 1; // move left to right, find bigger value index than pivot
  let j = r; // move right to left, find smaller value index than pivot

  while (i <= j) {
    while (i <= j && list[i] < pivot) {
      i++;
    }
    while (i <= j && list[j] > pivot) {
      j--;
    }
    if (i < j) {
      // 조건식 헷갈렸음
      swap(list, i, j);
    }
  }
  swap(list, pivotIndex, j);

  return j;
}

function quick_sort(list, l, r) {
  if (l < r) {
    const pivot = partition(list, l, r);
    quick_sort(list, l, pivot - 1);
    quick_sort(list, pivot + 1, r);
  }
}

function swap(list, idx1, idx2) {
  const temp = list[idx1];
  list[idx1] = list[idx2];
  list[idx2] = temp;
}
