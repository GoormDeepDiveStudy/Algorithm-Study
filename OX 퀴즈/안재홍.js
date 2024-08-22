function solution(quiz) {
    var answer = [];
    let i = 0;
    for(i = 0; i < quiz.length; i++){
        let s = quiz[i].toString().split('=');
        let a;
        let b;
        let c = parseInt(s[1]);
        let ss;
        
        if(s[0].includes('+')){
            ss = s[0].split('+');
            a = parseInt(ss[0]);
            b = parseInt(ss[1]);
            console.log(a+" "+b+" "+c);
            if(a+b===c) answer.push('O');
            else answer.push('X');
        }
        else if(s[0].includes('-')){ 
            ss = s[0].split('-');        
            a = parseInt(ss[0]);
            b = parseInt(ss[1]);
            console.log(a+" "+b+" "+c);
            if(a-b===c) answer.push('O');
            else answer.push('X');
        }   
    }
    return answer;
}