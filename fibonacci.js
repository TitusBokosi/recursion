function fibs(n) {
  // uses iteration to solve the fibonacci series
  const array = new Array(n);
  array[0] = 0;
  array[1] = 1;
  for (i = 2; i < array.length; i++) {
    array[i] = array[i - 2] + array[i - 1];
  }
  return array;
}

// fibs(10).forEach((element) => {
//   console.log(element);
// });

function fibsRec(n) {
  const array = new Array(n);
  array[0] = 0;
  array[1] = 1;
  let i = 2;
  function rec(n, i) {
    if (n === 2) {
      return array;
    } else {
      array[i] = array[i - 1] + array[i - 2];
      return rec(n - 1, i + 1);
    }
  }
  rec(n, i);
  return array;
}

const myArray = fibsRec(3);
myArray.forEach((elemnt) => {
  console.log(elemnt);
});
