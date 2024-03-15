function que() {
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
  // 테스트
  const que = new Queue();
  que.add("1");
  que.add("2");
  que.add("3");
  que.add("4");

  que.popleft();

  console.log(que.storage);
}

que();
