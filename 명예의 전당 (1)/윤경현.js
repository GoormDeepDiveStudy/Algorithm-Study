function solution(k, score) {
    var answer = [];
    const best = [];

    score.forEach((one) => {
        best.push(one)
        best.sort((a,b) => a-b)
        if(best.some(oneScore => oneScore <= one)){
            if(best.length > k){
                best.shift()
            }
            answer.push(best[0])
        }
    })
    return answer;
}