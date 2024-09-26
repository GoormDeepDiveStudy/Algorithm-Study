function solution(n, m, section) {
    //n미터의 벽을 m미터의 롤러로 칠하기
    //section이 분산되어있으면 2번 이상 칠해지는 곳 생긴다.
    let answer = 0;
    let paintNum = 0;
    for(let i=0; i<section.length;i++){
        if(section[i]>paintNum){
            paintNum = section[i] + m -1;
            answer++;
        }
    }
    return answer;
}
