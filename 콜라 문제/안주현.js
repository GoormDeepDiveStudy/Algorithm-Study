function solution(a, b, n) {
    //처음 n개의 콜라를 a로 나누고 나머지는 냅둔다.
    //나눈 수를 b와 곱한다.
    //곱해서 나온 숫자를 다시 나머지와 더하고 나누는거 반복.
    let answer = 0;
   
    while(n >= a){
        answer += parseInt(n/a)*b;
        n = parseInt(n/a)*b + n%a; 
    }
    return answer;
}
