function solution(babbling) {
    var answer = 0;
    const arr = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(word => {
        let original = word;

        for (let i = 0; i < arr.length; i++) {
            while (original.includes(arr[i])) {
                original = original.replace(arr[i], "");
            }
        }
        if (original.length === 0) {
            answer++;
        }
    });
    
    return answer;
}

//ㅠㅠ 테스트 1번 틀렸대요
