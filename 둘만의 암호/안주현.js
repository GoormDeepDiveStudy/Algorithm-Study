function solution(s, skip, index) {
    //index만큼  뒤의 알파벳으로
    //skip 안에 알파벳있으면 세지 않는다
    //z 넘어가면 다시 a로
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
                      "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
                      "u", "v", "w", "x", "y", "z"].filter(z => !skip.includes(z));
    
    let answer = ''; 

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let nowIndex = alphabet.indexOf(char); 
        let newIndex = (nowIndex + index) % alphabet.length; 
        answer += alphabet[newIndex]; 
    }

    return answer;
}
