function solution(k, score) {
    //명예의 전당 점수 따로 받기
    //오름차순 -sort 사용.
    //k번째까지는 명예의 전당으로 그 다음은 점수 대로 자르기
    let answer = [];
    let honor = [];
    for(let i=0;i<score.length;i++){
        if(i<k){
            honor.push(score[i]);
            honor.sort((a,b)=>a-b);
        }
        else if(score[i]> honor[0]){
            honor[0] = score[i];
            honor.sort((a,b)=> a-b);
        }
        answer.push(honor[0]);
    }
    return answer;
}
