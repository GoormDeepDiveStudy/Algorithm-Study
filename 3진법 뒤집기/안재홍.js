function solution(n) {
    var answer = 0;
    
    let s = '';
    
    while(n > 0){
        s += (n % 3).toString();
        n = parseInt(n / 3);
    }
    
    let ss = s.split('');
    
    for(let i = 0; i < ss.length; i++){
        answer += (3 ** (ss.length - 1 - i)) * parseInt(ss[i]);
    }
    
    return answer;
}