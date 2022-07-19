/* 
입력값 => 문자열(S)
출력값 -> 각 값을 뒤집어서 출력하기

문자열 시작과 끝은 공백이 아니다. 
< > 로 감싸져 있는 문자열은 뒤집어서 출력하지 않고 그대로 출력
*/

const fs = require("fs");
const file = "/dev/stdin";
// const file = "../input.txt";

function main() {
  const input = fs.readFileSync(file).toString().split("");
  // console.log(input); // 배열 안에 문자열을 하나씩 담아뒀음
  let stack = [];
  let queue = [];
  let isOpen = false; // >인 경우 false, <인 경우 true
  let answer = "";

  // input.length 만큼 반복문으로 돌면서
  for (let i = 0; i < input.length; i++) {
    // input[i]가 <인 경우
    // stack에 push
    if (input[i] === "<") {
      stack.push(input[i]);
      isOpen = true;
    }

    // input[i]가 >인 경우
    if (input[i] === ">") {
      stack.push(input[i]);
      isOpen = false;
      answer += stack.join("").trim();
      stack = [];
    }

    // isOpen이 true인 경우 stack에 push
    if (isOpen === true && input[i] !== "<") {
      stack.push(input[i]);
    }

    // < > 안의 문자열이 아닌 경우 queue에 unshift
    if (
      input[i] !== " " &&
      input[i] !== "<" &&
      isOpen === false &&
      input[i] !== ">"
    ) {
      queue.unshift(input[i]);
      // console.log(queue);
    }

    if (
      input[i] === " " &&
      input[i] !== "<" &&
      isOpen === false &&
      input[i] !== ">"
    ) {
      answer += queue.join("").trim() + input[i];
      queue = [];
    }

    if (
      input[i + 1] === "<" &&
      input[i] !== "<" &&
      isOpen === false &&
      input[i] !== ">"
    ) {
      answer += queue.join("").trim();
      queue = [];
    }
  }

  answer += queue.join("").trim();
  console.log(answer.trim());
}

main();
