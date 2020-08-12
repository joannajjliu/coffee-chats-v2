// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // Create copy of A:
  let B = [];
  A.map((int) => B.push(int));

  // sort B:
  B = sortArray(B);

  let result = 1; //start at the lowest possible correst result
  for (let i = 0; i < B.length; i++) {
    if (B[i] === result) {
      //   console.log("current result:", result);
      result = B[i] + 1;
    }
  }
  return result;
}

function sortArray(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  //   console.log("array:", array);
  return array;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
