function solution(number, limit, power) {
    let answer = 0;
    let divisors = [];

    for(let i=1; i<=number; i++){
        let cnt = 0;
        for(let j=1;j*j<=i;j++){
            if(i%j==0){
                cnt++
                if (j*j < i) 
                    cnt++
            }
        }
        divisors.push(cnt);
    }
    
    divisors.map((divisor)=>{
        if(divisor > limit){
            divisor = power;
        }
        answer += divisor;
    })
    
    return answer;
}