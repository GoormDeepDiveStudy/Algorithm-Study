function solution(s, skip, index) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let answer = '';
    
    skip.split('').map((item) => {
        alphabet.splice(alphabet.indexOf(item), 1);
    });
    
    s.split('').map((item) => {
        answer += alphabet[(alphabet.indexOf(item)+index) % alphabet.length];
    });
    
    return answer;
}