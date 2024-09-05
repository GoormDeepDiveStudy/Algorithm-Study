function solution(food) {
    var answer = '';
    for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2);
        answer += String(i).repeat(count);
    }
    return answer + '0' + answer.split('').reverse().join('');
}
