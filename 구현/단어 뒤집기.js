/* 
입력값 => 첫째 줄은 개수 
출력값 => 입력값을 모두 뒤집어서 출력하기
*/

const fs = require("fs");
const file = "/dev/stdin";
// const file = "../input.txt";

function main() {
  const input = fs.readFileSync(file).toString().split("\n");
  let result = "";

  for (let i = 1; i <= input[0]; i++) {
    let splitIP = input[i].split(" "); // [ 'I', 'am', 'happy', 'today' ]

    for (let j = 0; j < splitIP.length; j++) {
      result += splitIP[j].split("").reverse().join("") + " ";
    }
    console.log(result);
    result = "";
  }
}

main();
