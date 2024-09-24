function solution(k, m, score) {
    var answer = 0;
    let box = []
    
    score.sort().reverse();
    
    let idx = 0;

    while(idx < score.length){
        if(box.length < m){
            box.push(score[idx])
        }
        if(box.length == m){
            const minValue = Math.min(...box)
            answer += minValue*m
            box = []
        }
        idx++;
    }
    
    return answer;
}