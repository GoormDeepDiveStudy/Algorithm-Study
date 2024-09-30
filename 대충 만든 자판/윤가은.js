function solution(keymap, targets) {
    var answer = [];
    let count = {};
    
    keymap.forEach(row => 
        row.split('').forEach((char, idx) => 
            count[char] = Math.min(count[char] || Infinity, idx + 1)
        )
    );

    return targets.map(target => 
        target.split('').reduce((acc, char) => {
            if (acc === -1 || !count[char]) return -1;
            return acc + count[char];
        }, 0)
    );
    
    return answer;
}
