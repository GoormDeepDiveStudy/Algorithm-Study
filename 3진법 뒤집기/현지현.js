function solution(n) {
    var str = n.toString(3);

    var reverseStr = str.split("").reverse().join("");

    var answer = parseInt(reverseStr, 3);

    return answer;
}