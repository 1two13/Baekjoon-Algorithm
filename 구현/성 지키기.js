/* 
직사각형 성
모든 행과 모든 열에 한 명 이상의 경비원이 있도록

입력값 => 
가로 세로 (성의 크기)
경비원의 상태 (. 경비원 없음, X 경비원 있음)

출력값 => 추가해야 하는 경비원의 최솟값
*/

const fs = require("fs");
const file = "/dev/stdin";
// const file = "../input.txt";

// 답안 코드
function main() {
  const input = fs.readFileSync(file).toString().split("\n");

  let rowNum = Number(input[0].split(" ")[0]); // 행
  let colNumM = Number(input[0].split(" ")[1]); // 열

  let row = new Array(rowNum).fill(0); // [ 0, 0, 0, 0, 0 ]
  let col = new Array(colNumM).fill(0); // [0, 0, 0, 0, 0, 0, 0, 0]

  // 0부터 행까지
  for (let i = 0; i < rowNum; i++) {
    // 0부터 열까지
    for (let j = 0; j < colNumM; j++) {
      // X가 있으면 1로 변경
      if (input[i + 1][j] === "X") {
        // X가 있으면 해당 행을 1로 변경
        row[i] = 1;
        // X가 있는 열을 1로 변경
        col[j] = 1;
      }
    }
  }

  // console.log(row, col); // [ 1, 0, 1, 0, 0 ] [1, 1, 0, 1, 1, 1, 1, 1]

  let row_count = 0;
  let col_count = 0;

  for (let r of row) {
    if (r === 0) row_count += 1;
  }

  for (let c of col) {
    if (c === 0) col_count += 1;
  }

  console.log(Math.max(row_count, col_count));
}

main();
