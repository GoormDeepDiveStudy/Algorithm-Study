function solution(k, m, score) {
    //점수 내림차순으로 정렬
    //m으로 상자 갯수 구한다.
    var answer = 0;
    score.sort((a,b)=> b-a);
    let box = parseInt(score.length/m);
    for(let i=1;i<=box;i++){
        answer +=score[m*i-1]*m 
    }
    return answer;
}
