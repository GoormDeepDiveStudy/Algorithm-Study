function solution(left, right) {
    var answer = 0;
    
    for(let i = left; i<=right; i++){
        let y = []
        for(let j = 1; j <= i; j++){
            if(i%j === 0) y.push(j)
        }
        if(y.length%2 === 0) answer += i
         else answer -= i
    }
    
    return answer;
}