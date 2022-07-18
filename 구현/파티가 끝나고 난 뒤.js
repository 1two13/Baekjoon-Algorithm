/* 
1미터제곱당 몇명의 사람이 있는지 상근이는 알고 있음 (이 값이 정확한 값)
5개의 신문에 적혀있는 참가자 수

상근이가 알고 있는 사람수와 신문에 적혀있는 참가자수가 몇 명 만큼 잘못되어있는지

입력값 => 
1미터제곱당 사람 수(L) 넓이(P)
5개의 신문에 적혀있는 참가자 수

출력값 => 상근이가 알고 있는 사람수와 신문에 적혀있는 참가자수의 차이
*/

const fs = require("fs");
const file = "/dev/stdin";
// const file = "../input.txt";

function main() {
  const input = fs.readFileSync(file).toString().split("\n"); // [ '5 20', '99 101 1000 0 97' ]
  // console.log(input[0].split(" "));
  // console.log(input[1].split(" "));
  let result = "";

  // 상근이가 알고 있는 총 참가자 수
  let firstLine = input[0].split(" "); // [ '5', '20' ]
  let cnt = Number(firstLine[0]);
  let m2 = Number(firstLine[1]);
  let totalCnt = cnt * m2;

  // 5개의 신문에 적혀있는 참가자 수
  let secondLine = input[1].split(" "); // [ '99', '101', '1000', '0', '97' ]

  for (let i = 0; i < secondLine.length; i++) {
    result += String(Number(secondLine[i]) - totalCnt) + " ";
  }
  console.log(result);
}

main();
