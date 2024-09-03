function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i <= t.length-1; i++){
        const tt = t.slice(i, i+p.length);
        if(tt.length < p.length) break;
        if(Number(p) >= Number(tt)) answer++;
    }
    
    return answer;
}