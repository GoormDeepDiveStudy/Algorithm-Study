function solution(n) {
    var sol = 0;
    const number = n.toString(3);
    const numberReverse = number.split("").reverse().join("");
    
    sol = parseInt(numberReverse,3);
    return sol;
}
