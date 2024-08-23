function solution(quiz) {
    var answer = [];
    
    quiz.forEach((c) => {
        const arr = c.split(" ");
        let result = 0;
        switch(arr[1]){
            case "-":
                result = Number(arr[0]) - Number(arr[2]);
                break;
            case "+":
                result = Number(arr[0]) + Number(arr[2]);
                break;
        }
        if(result == Number(arr[4])) answer.push("O")
        else answer.push("X")
    })
    
    return answer;
}