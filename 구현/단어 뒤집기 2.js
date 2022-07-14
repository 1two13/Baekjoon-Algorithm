/* 
입력값 => 문자열(S)
출력값 -> 각 값을 뒤집어서 출력하기

문자열 시작과 끝은 공백이 아니다. 
< > 로 감싸져 있는 문자열은 뒤집어서 출력하지 않고 그대로 출력
*/

const fs = require("fs");
// const file = "/dev/stdin";
const file = "../input.txt";

function main() {
  const input = fs.readFileSync(file).toString().split("");
  // console.log(input); // 배열 안에 문자열을 하나씩 담아뒀음
  let stack = [];
  let queue = [];
  let isOpen = false;
  let answer = "";

  for (let i = 0; i <= input.length; i++) {
    console.log(input[i]);
    // input[i] 가 "<" 일 때
    if (input[i] === "<") {
      isOpen = true;
      if (stack.length > 0) {
        answer += stack.reverse().join("");
        // stack 리셋
        stack = [];
      }
      // input[i] 가 ">" 일 때
    } else if (input[i] === ">") {
      isOpen = false;
      answer += queue.join("") + input[i];
      // queue 리셋
      queue = [];
      continue;
      // < > 외의 문자열 중에서 공백이 있거나 undefined인 경우
    } else if ((input[i] === " " && !isOpen) || input[i] === undefined) {
      answer +=
        stack.reverse().join("").trim() + (input[i] === " " ? input[i] : "");
      stack = [];
      continue;
    }

    if (isOpen) {
      queue.push(input[i]);
    } else if (!isOpen) {
      stack.push(input[i]);
    }
  }

  console.log(answer);
}

main();
