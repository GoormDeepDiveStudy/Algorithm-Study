function solution(keymap, targets) {
    //i는 i+1 키를 눌렀을 때 문자
    //아예 없을 수도 있는 경우 있다.
    //작성 안될 때는 -1 
    let press = {};    
    let answer = [];
    
    for(let i=0;i<keymap.length;i++){
        let key = keymap[i];
        for(let j=0;j<key.length;j++){
            let alp = key[j];
            if(!press[alp]){
                press[alp] = j +1
            }
            else{
                if(press[alp]> j+1){
                    press[alp] =j+1;
                }
            }
        }
    }
for (let i = 0; i < targets.length; i++) {
        let target = targets[i];
        let totalPresses = 0;
        let isValid = true;
        
        for (let j = 0; j < target.length; j++) {
            let char = target[j];
            if (!press[char]) {
                isValid = false;
                break;
            }
            totalPresses += press[char];
        }
        
        if (isValid) {
            answer.push(totalPresses);
        } else {
            answer.push(-1);
        }
    }

    return answer;
}
