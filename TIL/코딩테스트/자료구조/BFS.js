class Queue {
  constructor() {
    this.storage = {};
    this.front = 0; //가장 처음 들어온 데이터
    this.rear = 0; // 가장 마지막에 들어온 데이터
  }
  size() {
    if (this.storage[this.rear] === undefined) return 0;
    else {
      return this.rear - this.front + 1;
    }
  }
  add(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  popleft() {
    let temp = this.storage[this.front];
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];

      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
    }
    return temp;
  }
}

const visit_list = new Queue();
const arr = [1, 2, 3, 4, 5, 6, 7];
const depth = 3;

visit_list.add(arr[0]);
for (let root = 0; root < arr.length; root++) {
  const visited_num = visit_list.popleft();
  console.log(visited_num);

  let c = root * 2 + 1;
  if (c <= arr.length) {
    visit_list.add(arr[c++]);
    visit_list.add(arr[c]);
  }
}
