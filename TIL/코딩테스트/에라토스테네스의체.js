function findPrimeNum(num) {
  const array = [];
  // insert index value into array
  for (let i = 2; i < num; i++) {
    array[i] = i;
  }

  // remove not prime num
  for (let i = 2; i < num; i++) {
    if (array[i] === 0) continue;
    for (let j = i + i; j < num; j += i) {
      array[j] = 0;
    }
  }

  return array.filter((num) => {
    return num !== 0;
  });
}

const result = findPrimeNum(10);
console.log(result);
