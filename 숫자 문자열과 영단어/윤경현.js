function solution(s) {
    var answer = 0;
    const numbers = { zero:0, one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9}
    
    Object.keys(numbers).map((numStr) => {
        s = s.replaceAll(numStr, numbers[numStr])
    })
    return Number(s);
}