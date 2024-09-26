function solution(number, limit, power) {
    // number명의 기사 / 자신의 number의 약수 개수만큼 공격력을 가진 무기를 구매
    // 하지만 limit만큼의 협약된 공격력
    // limit을 초과한 공격력을 가진 기사의 무기 power
    // 무기 공격력만큼 answer만큼의 철의 무게
    
    var answer = 0;
    
    for(let i = 1; i <= number; i++){
        let y = 0;
        
        //약수 구하기
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                y++;
                if (j !== i / j)
                    y++;
            }
        }
        if(y > limit) answer += power
        else answer += y
    }
    
    return answer;
}