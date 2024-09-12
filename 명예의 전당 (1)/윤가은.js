function solution(k, score) {
    var answer = [];
    return score.map(i=>{
        answer.push(i);
        answer.sort((a,b)=>b-a).splice(k);
        return answer[answer.length-1];
    });
}
//answer에 각 점수 추가, 정렬
//splice로 k개만큼
//최하위 반환
