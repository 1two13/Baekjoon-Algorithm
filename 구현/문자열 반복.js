/* 
입력값 => 반복횟수(R) 입력값(S)
출력값(P) => 입력값의 각 문자를 R번 반복한 값

첫 째줄 => 테스트 케이스 개수
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
    let splitIP = input[i].split(" ");
    // 반복횟수(R)
    let R = Number(splitIP[0]);
    // 입력값(S)
    let S = splitIP[1];
    let result = "";

    // S의 각 문자를 R번 반복한 값
    for (let j = 0; j < S.length; j++) {
      for (let k = 1; k <= R; k++) {
        result = result + S[j];
      }
    }

    console.log(result);
  }
}

main();
