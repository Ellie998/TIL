// 배열에 인덱스와 함께 접근
/*
const a = [1, 3, 45, 2, 10];
a.forEach((e, i) => {
  console.log(e, i);
});


// 공백을 기준으로 문자열을 분리
const str = "Hello World";
const res = str.split(" ");
console.log(res);
// 배열을 문자열로 만들기
const joinRes = res.join(" ");
console.log(joinRes);

// 정렬
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

// 배열에서 짝수만 나오게
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

// 곱하기 2를 해서 반환하고 싶다
const numbers = [1, 2, 3, 4, 5];
const res = numbers.map((num) => num * 2);
console.log(res);
*/

// 배열을 합치거나 배열을 기반으로 하나의 값을 만들어내고 싶다
/*
const numbers = [1, 2, 3, 4, 5];
const res = numbers.reduce((total, element) => total + element, 0);
console.log(res);
*/

// 배열 생성
let a = Array(50).fill(0);
console.log(a);

let b = Array(100)
  .fill()
  .map((e) => Array(50).fill(0));
console.log(b);
