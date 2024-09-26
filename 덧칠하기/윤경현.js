function solution(n, m, section) {
    // n길이의 벽
    // m길이의 롤러
    // section에 떨어진 페인트
    // 룰러가 벽에서 벗어나면 안된다
    
    var answer = 0;
    let point = 0

    section.forEach((sec) => {
        if(point <= sec && point <= n){
          point = sec+m;  
          answer++;  
        } 
        
    })
    
    return answer;
}