function solution(a, b, n) {
    var answer = 0;
    while(n>=a){
        answer += Math.floor(n/a)*b;
        n = Math.floor(n/a)*b + (n%a);
    }
    return answer;
}
    //n을 a개로 나누기 x b 나머지는 버리기
    //n이 a보다 작으면 종료
    //나머지 더하기
