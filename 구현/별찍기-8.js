/* 
입력값 => N
출력값 => 2 x N - 1 번째 줄까지 차례대로 별 출력
*/

const fs = require("fs");

function main() {
  let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

  // 1부터 input줄까지 1개씩 늘려가면서 찍기
  for (let i = 1; i <= input; i++) {
    // 앞에 별 출력
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }

    // 공백 출력 (한 줄에 N * 2 칸 수로 맞추기)
    for (let j = 0; j < input * 2 - 2 * i; j++) {
      process.stdout.write(" ");
    }

    // 뒤에 별 출력
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }

    // 줄바꿈 출력
    process.stdout.write("\n");
  }

  // input줄 이후부터는 1까지 1개씩 줄여가면서 찍기
  for (let i = input - 1; i >= 1; i--) {
    // 앞에 별 출력
    for (let j = i; j >= 1; j--) {
      process.stdout.write("*");
    }

    // 공백 출력 (한 줄에 N * 2 칸 수로 맞추기)
    for (let j = 0; j < input * 2 - 2 * i; j++) {
      process.stdout.write(" ");
    }

    // 뒤에 별 출력
    for (let j = i; j >= 1; j--) {
      process.stdout.write("*");
    }

    // 줄바꿈 출력
    process.stdout.write("\n");
  }
}

main();
