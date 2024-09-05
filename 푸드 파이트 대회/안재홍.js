function solution(food) {
    var answer = '';
    let s = '';
    
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < parseInt(food[i] / 2); j++){
            s += i.toString();
        }
    }
    answer = s + '0' + s.split('').reverse().join('');
    
    return answer;
}