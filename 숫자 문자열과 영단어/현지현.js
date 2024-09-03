function solution(s) {
    let answer = '';
    let str = '';
    const dic = [
        "zero", "one", "two", "three", "four", "five", 
        "six", "seven", "eight", "nine"
    ];
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        
        if (c >= '0' && c <= '9') {
            answer += c;
        } else {
            str += c;
            
            for (let j = 0; j < dic.length; j++) {
                if (str === dic[j]) {
                    answer += j;
                    str = '';
                    break;
                }
            }
        }
    }
    return Number(answer);
}