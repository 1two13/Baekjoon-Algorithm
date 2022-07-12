/* 
5명의 참가자 (5줄)
점수는 1 ~ 5점 (4개의 평가 점수)
각 참가자가 얻은 점수는 다른 사람이 평가해 준 점수의 합
우승자는 가장 많은 점수를 얻은 사람

입력값 => 각 참가자가 얻은 평가 점수
출력값 => 우승자 점수
*/

const fs = require("fs");
const file = "/dev/stdin";
// const file = "../input.txt";

function main() {
  const input = fs.readFileSync(file).toString().split("\n");
  let sum = 0;
  let sumArr = [];
  let index;

  // 5번 반복(5행) 0 ~ 4
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j += 2) {
      // 각 행의 합 구하고
      sum = sum + Number(input[i][j]);
    }
    // 배열에 순서대로 담기
    sumArr.push(sum);
    // sum 리셋
    sum = 0;
  }

  let maxSum = Number(Math.max(...sumArr));
  // 가장 큰 값이 몇 번째 행인지와
  // sumArr을 반복문으로 돌면서 maxSum과 같은 숫자가 있다면 해당 index 리턴
  for (let i = 0; i <= sumArr.length; i++) {
    if (Number(sumArr[i]) === maxSum) index = i + 1;
  }

  // 가장 점수가 높은 번호와 점수 출력하기
  console.log(index, maxSum);
}

main();
