function solution(t, p) {
    var answer = 0;
    
    for(let i=0;i<t.length - p.length+1;i++){
        let value = t.slice(i,i+p.length);
        if(p>=value) answer++;
    }
    return answer;
}
