/* 
입력값 => N
출력값 => 2 x N - 1 번째 줄까지 차례대로 별 출력 (모래시계형)
*/

const fs = require("fs");

function main() {
  let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

  // 별이 2 * input - 1 개 부터 시작해서 1개가 될 때까지
  for (let i = 2 * input - 1; i >= 1; i -= 2) {
    // 별 기준으로 앞에 공백 출력 (0, 1, 2 ...)
    for (let j = 0; j < 2 * input - 1 - i; j += 2) {
      process.stdout.write(" ");
    }

    // 별 찍기
    for (let j = i; j >= 1; j--) {
      process.stdout.write("*");
    }

    // 줄바꿈 출력
    process.stdout.write("\n");
  }

  // 별이 3개부터 시작해서 2 * input - 1 개 될 때까지
  for (let i = 3; i <= 2 * input - 1; i += 2) {
    // 별 기준으로 앞에 공백 출력 (3, 2, 1, 0)
    for (let j = 0; j < 2 * input - 1 - i; j += 2) {
      process.stdout.write(" ");
    }

    // 별 찍기
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }

    // 줄바꿈 출력
    process.stdout.write("\n");
  }
}

main();
