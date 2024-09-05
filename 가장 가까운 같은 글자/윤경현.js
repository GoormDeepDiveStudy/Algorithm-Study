function solution(s) {
    var answer = [];
    
    [...s].forEach((ss,i) => {
        const sliceS = s.slice(0,i);
        if(sliceS.includes(ss)){
            answer.push(i-sliceS.lastIndexOf(ss))
        }else{
            answer.push(-1)
        }
        
    })
    return answer;
}