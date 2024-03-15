function heap_sort(list) {
  const heap = [...list];
  const heap_length = heap.length;
  // 트리구조를 힙 구조로 변경
  for (let i = 1; i < heap_length; i++) {
    let c = i;
    do {
      let root = Math.floor((c - 1) / 2);
      if (c == 0) break;
      if (heap[root] < heap[c]) {
        swap(heap, root, c);
      }
      c = root;
    } while (true);
  }
  // 오름차순 정렬
  for (let i = heap_length - 1; i > 1; i--) {
    swap(heap, 0, i);

    let root = 0;
    let c = 1;
    do {
      c = root * 2 + 1;
      if (c > i) break;
      if (heap[c] < heap[c + 1] && c < i) {
        c++;
      }
      if (heap[root] < heap[c] && c < i) {
        swap(heap, root, c);
      }
      root = c;
    } while (true);
  }

  // 결과 출력
  console.log(heap);
}
function swap(list, i, j) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

heap_sort([7, 6, 5, 8, 3, 5, 9, 1]);
