function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    
    section.map((s)=>{
        if(painted <= s){
            painted = s + m;
            answer++;
        }
    })
    
    return answer;
}