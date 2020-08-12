function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = [];
  let cnt = N;
  if (N % 2 === 1) {
    arr.push(0);
    cnt -= 1;
  }
  let start = 1;
  while (cnt > 0) {
    arr.push(start);
    arr.push(start * -1);
    start += 1;
    cnt -= 2;
  }
  return arr;
}

console.log(solution(99));
