function solution(s) {
    var answer = [];
    let arr = s.split('');
    let j = 0;
    let ss = '';
    
    for(let i = 0; i < s.length; i++){
        if(ss.includes(s[i])){
            let n = s.lastIndexOf(s[i], i - 1);
            answer.push(i - n);
        }else{
            answer.push(-1);
            ss += s[i];
        }
    }
    
    return answer;
}