/* 
입력값 => OX 값
출력값 => 계산된 결과 값
*/

const fs = require("fs");
const file = "/dev/stdin";
// const file = "../input.txt";

function main() {
  const input = fs.readFileSync(file).toString().split("\n");
  // 테스트 케이스 개수
  const cnt = Number(input[0]);

  // cnt 개수만큼 테스트 케이스 제공 (반복문)
  for (let i = 1; i <= cnt; i++) {
    // 출력할 점수
    let score = 0;
    // O 개수
    let zeroCnt = 0;
    // 테스트 케이스
    let test = input[i];

    for (let j = 0; j < test.length; j++) {
      // 입력값의 j번째가 O인 경우 score 점수는 1씩 증가
      if (test[j] === "O") {
        zeroCnt += 1;
        score += zeroCnt;
      }
      // 입력값의 j번째가 X인 경우 score 점수는 그대로
      else {
        zeroCnt = 0;
        score += 0;
      }
    }

    console.log(score);
  }
}

main();
