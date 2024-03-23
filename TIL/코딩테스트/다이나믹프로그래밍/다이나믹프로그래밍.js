const arr = [];

function fibonacci(num) {
  if (num === 1) return 1;
  if (num === 2) return 1;
  if (arr[num] !== undefined) return arr[num];
  return (arr[num] = fibonacci(num - 1) + fibonacci(num - 2));
}
console.time("dynamic programming");
const result = fibonacci(20);
console.log(result);
console.timeEnd("dynamic programming"); // 5.5ms

// function fibonacci_lazy(num) {
//   if (num === 1) return 1;
//   if (num === 2) return 1;
//   return fibonacci_lazy(num - 1) + fibonacci_lazy(num - 2);
// }

// console.time("before dynamic programming");
// const result_lazy = fibonacci_lazy(20);
// console.log(result_lazy);
// console.timeEnd("before dynamic programming"); // 6.6ms
