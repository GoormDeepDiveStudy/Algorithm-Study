function solution(quiz) {
    var answer = [];
    // quiz.forEach((c) => {
    //     const arr = c.split(" ");
    //     if(arr[2].length > 1 && arr[1] == "-" && arr[2][0] == "-"){
    //         eval(arr[0]+arr[2]) == Number(arr[4]) ? answer.push("O") : answer.push("X")
    //     }
    //     else {
    //         eval(arr[0]+arr[1]+arr[2]) == Number(arr[4]) ? answer.push("O") : answer.push("X")
    //     }
    // })
    
    quiz.forEach((c) => {
        const arr = c.split(" ");
        switch(arr[1]){
            case "-":
                let arr2 = Number(arr[2])
                if(arr[2].length > 1 && arr[2][0] == "-") arr2 = Number(-arr[2])
                console.log(arr[2], arr2)
                Number(arr[0]) - arr2 == Number(arr[4]) ? answer.push("O") : answer.push("X")
                break;
            case "+":
                Number(arr[0]) + Number(arr[2]) == Number(arr[4]) ? answer.push("O") : answer.push("X")
                break;
        }
    })
    
    return answer;
}