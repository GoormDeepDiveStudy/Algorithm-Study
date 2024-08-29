function solution(t, p) {
    var answer = 0;
    
    let n;
    let nn = parseInt(p);
    
    for(let i = 0; i < t.length - p.length + 1; i++){
        n = parseInt(t.slice(i,i + p.length));
        if(n <= nn) answer++;
    }
    
    return answer;
}