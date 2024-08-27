function solution(number) {
    var answer = 0;
    let i = 0;
    let j = 1;
    let k = 2;
    
    for(i = 0; i < number.length; i++){
        for(j = i + 1; j < number.length; j++){
            for(k = j + 1; k < number.length; k++){
                if(i===j||j===k||k===i)
                   continue;
                if(number[i] + number[j] + number[k] === 0) {
                    console.log(number[i],number[j],number[k]);
                    answer++;
                }
            }
        }
    }
    return answer;
}