function solution(food) {
    let answer = '';
    let reverse = '';
    
    food.map((food,idx)=>{
        let cnt = Math.floor(food/2);
        while(cnt > 0){
            answer += idx;
            cnt--;
        }
    })
    
    reverse = answer.split('').reverse().join('');
    answer += '0' + reverse;
    
    return answer;
}