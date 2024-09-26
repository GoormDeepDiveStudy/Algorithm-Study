function solution(number, limit, power) {
    //약수 갯수만큼 공격력 정해짐
    //limit에 걸리면 공격력 power로 고정됨.
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        let iron = 0;

        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                iron++;
                if (j !== i / j) iron++; 
            }
        }

        if (iron > limit) {
            answer += power;
        } else {
            answer += iron;
        }
    }
    return answer; 
}
