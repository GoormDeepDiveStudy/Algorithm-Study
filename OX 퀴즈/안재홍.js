function solution(quiz) {
    var answer = [];
    
    for(let i = 0; i < quiz.length; i++){
        let s = quiz[i].toString().split(' ');
        let a = parseInt(s[0]);
        let b = s[1];
        let c = parseInt(s[2]);
        let d = parseInt(s[4]);
        
        if(s[1]==='+'){
            if(a+c===d) answer.push('O');
            else answer.push('X');
        }
        else if(s[1]==='-'){ 
            if(a-c===d) answer.push('O');
            else answer.push('X');
        } 
    }
    return answer;
}