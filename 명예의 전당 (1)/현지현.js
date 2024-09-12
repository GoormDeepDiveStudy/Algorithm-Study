function solution(k, score) {
    let top = [];
    let answer = [];
    
    score.forEach((num) => {
        top.push(num);
        top.sort((a,b)=>b-a);
        
        if(top.length > k){ top.pop(); }
        
        answer.push(Math.min(...top));
    })
    
    return answer;
}