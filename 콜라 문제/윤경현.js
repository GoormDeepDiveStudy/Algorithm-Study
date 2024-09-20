function solution(a, b, n) {
    // n개의 빈병
    // a개 빈병을 주면 b개의 콜라를 준다.
    // 몇개를 받을 수 있는지 짜라
    
    // 빈병이 a개 미만이면 남은 빈병은 킵해야한다.
    
    var answer = 0;
    
    let save = n;
    
    while(save >= a){
        answer += Math.floor(save/a)*b
        save = (save%a) + (Math.floor(save/a))*b
    }
    return answer;
}