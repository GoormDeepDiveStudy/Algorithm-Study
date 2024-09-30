function solution(s, skip, index) {
  var answer = "";
  let sArr = s.split("");

  let skipArr = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((a) => !skip.includes(a))
    .join("");

  for (let i = 0; i < sArr.length; i++) {
    answer += skipArr[(skipArr.indexOf(sArr[i]) + index) % skipArr.length];
  }
  return answer;
}
