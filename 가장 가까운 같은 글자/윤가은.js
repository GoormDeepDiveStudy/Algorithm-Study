function solution(s) {
    const answer = [-1];
    for (let i = 1; i < s.length; i++) {
        answer.push(
            s[i] === s[i - 1] ? 1 : (() => {
                for (let j = i - 2; j >= 0; j--) {
                    if (s[i] === s[j]) return i - j;
                }
                return -1;
            })()
        );
    }
    return answer;
}
