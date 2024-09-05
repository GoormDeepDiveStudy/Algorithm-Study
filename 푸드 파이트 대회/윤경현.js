function solution(food) {
    var answer = '';
    food.forEach((f,idx) => {
        for(let i = 0; i < Math.floor(f/2); i++){
            answer += idx
        }
    })
    answer += 0;
    food.reverse().forEach((f,idx) => {
        for(let i = 0; i < Math.floor(f/2); i++){
            answer += food.length -(idx+1)
        }
    })
    return answer;
}