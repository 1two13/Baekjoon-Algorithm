/* 
입력값 => 자연수 A B C
출력값 => A x B x C 결과에 0 ~ 9까지 각각의 숫자가 몇 번씩 쓰였는지
*/

const fs = require("fs");
const file = "/dev/stdin";
// const file = "../input.txt";

//! 백준에서는 실패로 뜨는 코드
// 17행의 input.length를 3으로 고정하면 통과된다. 3을 고정값으로 줘야한다니..
function main() {
  const input = fs.readFileSync(file).toString().split("\n");
  let multi = 1;
  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < input.length; i++) {
    multi = multi * Number(input[i]);
  }

  multi = String(multi);

  for (let i = 0; i < multi.length; i++) {
    for (let j = 0; j <= 9; j++) {
      if (Number(multi[i]) === j) result[j] += 1;
    }
  }

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

main();

// 백준에서도 성공으로 뜨는 코드
function main() {
  const input = fs.readFileSync(file).toString().split("\n");

  let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let multi = String(input[0] * input[1] * input[2]);

  for (let i = 0; i < multi.length; i++) {
    for (let j = 0; j <= 9; j++) {
      if (Number(multi[i]) === j) result[j] += 1;
    }
  }

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

main();
