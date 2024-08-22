function solution(quiz) {
    var answer = [];
    let cal = 0;

    for (i = 0; i < quiz.length; i++) {
        let arr = quiz[i].split(" ");

        if (arr.includes("+")) {
            cal = Number(arr[0]) + Number(arr[2]);
        } else if (arr.includes("-")) {
            cal = Number(arr[0]) - Number(arr[2]);
        }

    answer.push(cal === Number(arr[4]) ? "O" : "X");
    }
    return answer;
}
