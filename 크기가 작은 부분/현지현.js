function solution(t, p) {
    var answer = 0;
    var len = p.length;
    
    for(let i = 0; i <= t.length - len; i++){
        
        var subStr = t.substring(i, i + len);
        
        if(subStr <= p) answer++;
    }
    
    return answer;
}