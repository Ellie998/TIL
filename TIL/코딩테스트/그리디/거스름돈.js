function solution(n) {
  let value = n;
  let answer = 0;
  const ref = [500, 100, 50, 10];
  const res = [];
  ref.forEach((num, i) => {
    res[i] = Math.floor(value / num);
    value -= res[i] * num;
    answer += res[i];
  });
  console.log(answer);
  return answer;
}

solution(1260);
