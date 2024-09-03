function solution(s) {
    let answer = s;
    let str = ['zero', 'one', 'two', 'three', 'four',
               'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < str.length; i++) {
        answer = answer.split(str[i]).join(i);
    }
    return Number(answer);
}
